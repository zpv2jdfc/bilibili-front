import { Component } from '@angular/core';
import {InfoService} from 'src/app/services/info.service'
import {UiService} from 'src/app/services/ui.service'
import {UserService} from 'src/app/services/user.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public infoService : InfoService,
              public uiService : UiService,
              private userService : UserService) {
  }
  login(){
    this.uiService.logreg_window = true;
  }
  logout(){
    this.userService.logout();
  }
}
