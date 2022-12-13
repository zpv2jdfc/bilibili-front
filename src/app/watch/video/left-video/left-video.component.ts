import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import HLS from 'hls.js'
import {Queue} from "src/app/common/queue";
import {interval, Observable, take, timer} from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-left-video',
  templateUrl: './left-video.component.html',
  styleUrls: ['./left-video.component.css']
})
export class LeftVideoComponent {
  /**
   * 视频信息
   * title 标题
   * play_num 播放量
   * biu_num 弹幕数
   * uptime 上传时间
   * viewCount 正在观看人数
   * commentCount 评论数
   * duration 视频时长
   */
  @Input() video_info : any;
  hls:any;
  @ViewChild('videop',{ static:true})
  video;
  @ViewChild('canvas', {static:true})
  canvas;
  ctx : any;
  biu_que : any;
  timer;
  curtime : number = 0;
  ngOnInit(){
    this.hls = new HLS();
    this.hls.attachMedia(this.video.nativeElement);
    this.hls.loadSource(this.video_info.url);
    this.hls.on(HLS.Events.MANIFEST_PARSED, function() {
      this.video.pause();});
    this.setBiu();

    //监听播放事件
    let _this = this;
    this.video.nativeElement.addEventListener("play",function (){
      _this.play()
    });
    this.video.nativeElement.addEventListener("pause",function (){
      _this.pause()
    });
    this.video.nativeElement.addEventListener("timeupdate",function (){
      _this.timeupdate()
    });

  }
  play(){
    console.log("开始播放")
    this.timer = interval(16);
    const sub = this.timer.subscribe(x => {
      this.draw(x);
      if(this.video.nativeElement.paused)
        sub.unsubscribe();
    });
  }
  pause(){
    console.log("暂停播放")

  }
  timeupdate(){
    if(this.video.nativeElement.currentTime-this.curtime>0.5 || this.video.nativeElement.currentTime-this.curtime<0){
      console.log("拖动了进度条，重新加载弹幕")
      this.curtime = this.video.nativeElement.currentTime;
      this.biu_que.clear();
      this.loadBiu(this.video_info.id,this.curtime,this.curtime+20);
    }else {
      this.curtime = this.video.nativeElement.currentTime;
    }
  }

  //发送弹幕
  biu(){

  }
  loadBiu(videoId:number,begin:number, end:number){

  }
  setBiu(){
    let w = 792;
    let h = 357;
    this.canvas.nativeElement.width = 5*w;
    this.canvas.nativeElement.height = 5*h;
    this.canvas.nativeElement.style.width = w+'px';
    this.canvas.nativeElement.style.height = h+'px';
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.ctx.font = "20px sans-serif";
    this.ctx.fillStyle = "#fff";
    this.ctx.scale(5,5);
    this.biu_que = new Queue<{}>();
    //初始加载20s弹幕，位置从最右端开始
    this.biu_que.offer({x:792,y:100,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
  }
  draw(x:number){
    this.ctx.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);
    this.ctx.save();
    let size = this.biu_que.size();
    for(let i=0; i<size; ++i){
      let item = this.biu_que.poll();
      item.x -= item.speed;
      if(item.x>0){
        this.ctx.fillText(item.content,item.x,item.y);
        this.ctx.restore();
        this.biu_que.offer(item);
      }
    }
  }


}


