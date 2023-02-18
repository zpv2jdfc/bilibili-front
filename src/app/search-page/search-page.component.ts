import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../services/video.service";
import {UiService} from "../services/ui.service";
import {InfoService} from "../services/info.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  constructor(public uiService : UiService,
              private infoService : InfoService) {
  }
  ngOnInit(){
    this.infoService.init();
    if(this.infoService.log_state){
      this.uiService.logreg_window = false
    }else {

    }
  }
}
