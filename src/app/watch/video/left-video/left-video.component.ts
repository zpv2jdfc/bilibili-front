import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import HLS from 'hls.js'
import {Queue} from "src/app/common/queue";
import {interval, Observable, take, timer} from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import {VideoService} from 'src/app/services/video.service'
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
  biu_loaded : any;
  timer;
  //当前视频播放到哪
  curtime : number = 0;
  //是否可以向准备队列添加弹幕
  //已经加载到哪个时间的弹幕
  biu_end_time = 0;
  push_loadded : boolean = true;
  biu_content : string
  // show info
  like_num_show : string
  constructor(private videoService : VideoService) {
  }
  ngOnInit(){
    this.video_info.id = 0;
    this.hls = new HLS();
    this.hls.attachMedia(this.video.nativeElement);
    this.hls.loadSource(this.video_info.url);
    this.hls.on(HLS.Events.MANIFEST_PARSED, function() {
      this.video.pause();});
    this.setBiu();
    //init variable
    this.like_num_show = this.video_info.like_num
    if(this.video_info.like_num>=10000){
      this.like_num_show = (this.video_info.like_num/10000).toFixed(1) + '万'
    }
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
      this.push_loadded = false;
      while(!this.biu_loaded.isEmpty() && this.biu_loaded.peek().time<=this.video.nativeElement.currentTime){
        this.biu_que.offer(this.biu_loaded.poll());
      }
      this.push_loadded = true;
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
      this.biu_loaded.clear();
      this.loadBiu(this.video_info.id,this.curtime,this.curtime+20);
      this.biu_end_time = this.curtime+20;
    }else {
      this.curtime = this.video.nativeElement.currentTime;
      if(this.curtime>this.biu_end_time-10){
        this.loadBiu(this.video_info.id,this.biu_end_time,this.biu_end_time+20);
        this.biu_end_time += 10;
      }
    }
  }

  //发送弹幕
  biu(){
    console.log(this.biu_content)
    this.videoService.biu(this.video_info.id, this.biu_content, this.video.nativeElement.currentTime).subscribe(data=>{
      console.log(data)
    });
  }
  loadBiu(videoId:number,begin:number, end:number){
    this.videoService.getBiu(videoId,begin,end).subscribe(data=>{
      let biu_temp = new Queue();
      for(var item of data.data){
        item.time = item.biu_time;
        item.x=792;
        item.y=Math.floor(Math.random()*330);
        item.speed=item.content.length/5
        delete item.biu_time;
        biu_temp.offer(item);
      }
      while(this.push_loadded==false){
      }
      this.biu_loaded = biu_temp;
    })
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
    this.biu_loaded = new Queue();
    //初始加载20s弹幕，位置从最右端开始
    this.biu_que.offer({x:792,y:100,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
    this.biu_que.offer({x:792,y:200,content:'100',speed:1})
    this.loadBiu(this.video_info.id,0,20);
    this.biu_end_time = 20;
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


