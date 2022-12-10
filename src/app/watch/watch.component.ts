import { Component } from '@angular/core';
import {InfoService} from 'src/app/services/info.service'
import {UiService} from 'src/app/services/ui.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  video_info = {

  }

  ngOnInit() {
    this.infoService.init();
    if(this.infoService.log_state){
      this.uiService.logreg_window = false
    }else {

    }
    this.route.paramMap.subscribe(param=>{
      this.bv_code = param.get("code");
    });
    this.videoService.searchByBVCode(this.bv_code);
  }
}
