import { Component,ViewChild  } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {RecommendService} from './recommend.service'
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {
  constructor(private recommendService: RecommendService) {
  }
  recommend_carsouels = []
  recommend_grids = []
  pageCount : number  = 0;
  videoList = []

  /**
   * 实现infinite scroll
   */
  subscribeScoll:any;
  scrollDis:any = {
    _top:0
  }
  byteArrayToString(data : any) : string{
    if(data==null)
      return "";
    var str = '',
      _arr = data;
    for(var i = 0; i < _arr.length; i++) {
      var one = _arr[i].toString(2),
        v = one.match(/^1+?(?=0)/);
      if(v && one.length == 8) {
        var bytesLength = v[0].length;
        var store = _arr[i].toString(2).slice(7 - bytesLength);
        for(var st = 1; st < bytesLength; st++) {
          store += _arr[st + i].toString(2).slice(2);
        }
        str += String.fromCharCode(parseInt(store, 2));
        i += bytesLength - 1;
      } else {
        str += String.fromCharCode(_arr[i]);
      }
    }
    return str;
  }
  ngOnInit(){
    this.recommendService.loadFirstPageVideo().subscribe(data=>{
      for(let video of data.data){
        // video.cover = this.byteArrayToString(video.cover);
        video.url = '/video/'+video.id
        this.videoList.push(video)
      }
    })
    this.subscribeScoll = fromEvent(window, 'scroll')
      .subscribe((event) => {
        this.onWindowScroll();//调用
      });
    this.recommendService.load().subscribe(
      (res:any)=> {
        this.recommend_carsouels = res.recommend_carsouels;
        this.recommend_grids = res.recommend_grids;
      }
    )
  }

  loadVideo(page : number){
    this.recommendService.loadVideoPage(page).subscribe(data=>{
      for( let video of data.data){
        this.videoList.push(video)
      }
    })
  }
  onWindowScroll(){
    console.log(this.videoList.length)
    let top = this.scollPostion().top;
    let height = this.scollPostion().height;
    if(height - top <1000){
      this.loadVideo(this.pageCount);
    }
  }
  scollPostion() {
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
      t = document.documentElement.scrollTop;
      l = document.documentElement.scrollLeft;
      w = document.documentElement.scrollWidth;
      h = document.documentElement.scrollHeight;
    } else if (document.body) {
      t = document.body.scrollTop;
      l = document.body.scrollLeft;
      w = document.body.scrollWidth;
      h = document.body.scrollHeight;
    }
    return {
      top: t,
      left: l,
      width: w,
      height: h
    };
  }
}
