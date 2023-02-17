import { Component } from '@angular/core';
import {InfoService} from "../services/info.service";
import {UiService} from "../services/ui.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute,
              public infoService: InfoService,
              public uiService: UiService
  ){}
  user_code  = new BehaviorSubject(null);
  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      this.user_code.next(param.get("code"))
    });
    this.infoService.init();
    if(this.infoService.log_state){
      this.uiService.logreg_window = false
    }else {
    }
  }


}
