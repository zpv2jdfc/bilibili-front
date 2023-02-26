import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  constructor(private activateInfo:ActivatedRoute,
              private videoService : VideoService,) {
  }
  search_content = ''
  video_list = []
  ngOnInit(){
    this.activateInfo.queryParams.subscribe(queryParams => {
      this.search_content = queryParams['keyword'];
      this.init()
    })
  }
  init(){
    this.videoService.searchVideoBytitle(this.search_content).subscribe(
      data=>{
        for(let video of data.data){
          video.url = '/video/'+video.id;
          this.video_list.push(video);
        }
      }
    )
  }
}
