import {Component, OnInit} from '@angular/core';
import {UiService} from "../services/ui.service";
import {WebsocketService} from "../services/websocket.service";
import {InfoService} from "../services/info.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(public uiService : UiService,
              private websocketService : WebsocketService,
              private infoService:InfoService) {
  }
  ngOnInit(){
    this.infoService.init();
    if(this.infoService.log_state){
      this.uiService.logreg_window = false
    }else {

    }
  }
}
