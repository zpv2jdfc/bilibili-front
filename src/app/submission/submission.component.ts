import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../services/video.service";
import {UiService} from "../services/ui.service";
import {InfoService} from "../services/info.service";

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  constructor(private route: ActivatedRoute, private videoService : VideoService,
              public uiService : UiService, private infoService : InfoService) {}
  ngOnInit(){
      this.infoService.init();
      if(this.infoService.log_state){
        this.uiService.logreg_window = false
      }else {

      }
  }
}
