import { Component } from '@angular/core';
import {InfoService} from 'src/app/services/info.service'
import {UiService} from 'src/app/services/ui.service'
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {VideoService} from 'src/app/services/video.service'
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  constructor(private route: ActivatedRoute, private videoService : VideoService,
              public uiService : UiService, private infoService : InfoService) {}

  bv_code = ''
  // video_info : any;
  public video_info = new BehaviorSubject(null);
  //   = {
  //   url : "http://1.116.112.80/src/video/test/test.m3u8",
  //   duration: 9,
  //   like_num: 10000,
  //   play_num: 1000,
  //   biu_num: 200,
  //   comment_num: 51,
  //   uptime: "2022-12-30 18:51:23",
  //   title: '火影忍者',
  //   tags:[],
  //   intro: '哈哈哈哈哈哈哈哈，不是孤勇者，但是别失望'
  // }

  ngOnInit() {
    this.infoService.init();
    if(this.infoService.log_state){
      this.uiService.logreg_window = false
    }else {

    }
    this.route.paramMap.subscribe(param=>{
      this.bv_code = param.get("code");
    });
    this.videoService.searchByBVCode(this.bv_code).subscribe(
      (data)=>{
          if(data.code!=10000){
            location.replace("404")
          }else {
            let temp = data.data;
            temp.url = this.infoService.src_url + '/video/' + data.data.url +'/' + data.data.url +'.m3u8';
            if(data.data.tags!=null && data.data.tags!='')
              temp.tags = data.data.tags.split(';');
            this.video_info.next(temp);
          }
      }
    )
  }
}
