import { Component } from '@angular/core';
import {VideoService} from "../../../services/video.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-right-recommend',
  templateUrl: './right-recommend.component.html',
  styleUrls: ['./right-recommend.component.css']
})
export class RightRecommendComponent {
    recommend_videos = [];
    upInfo = {
      avatar : '',
      name : '',
      id : '',
      url : '',
      temperature : '',
    }

    bv_code : string;
    constructor(private videoService : VideoService,
                private route: ActivatedRoute,) {
    }
    ngOnInit(){
      this.route.paramMap.subscribe(param=>{
        this.bv_code = param.get("code");
      });
      this.videoService.getUpInfoByBVCode(this.bv_code).subscribe(
        data=>{
          this.upInfo = data.data.owner;
          if(this.upInfo.avatar==null || this.upInfo.avatar=='' || this.upInfo.avatar=='default'){
            this.upInfo.avatar='http://www.v-ming.com/avatar/default.jpg'
          }
        }
      )
      this.videoService.getHottest().subscribe(
        data=>{
          for(let video of data.data){
            video.url = '/video/'+video.id;
            this.recommend_videos.push(video);
          }
        }
      )
    }
}
