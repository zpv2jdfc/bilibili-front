import { Component } from '@angular/core';
import {InfoService} from 'src/app/services/info.service'
import {UiService} from 'src/app/services/ui.service'
import {UserService} from 'src/app/services/user.service'
import {VideoService} from "../services/video.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public infoService : InfoService,
              public uiService : UiService,
              private userService : UserService,
              private router: Router,
              private activateInfo:ActivatedRoute) {
  }
  search_content = ''
  login(){
    this.uiService.logreg_window = true;
  }
  logout(){
    this.userService.logout();
  }
  ngOnInit(){
    this.activateInfo.queryParams.subscribe(queryParams => {
      this.search_content = queryParams['keyword'];
    })
  }
  search(){
    // this.router.navigate(['/all'], {queryParams: {key : this.search_content}});
    window.open('all?keyword='+this.search_content,"_blank");
  }
}
