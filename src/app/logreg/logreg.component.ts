import { Component } from '@angular/core';
import {UiService} from 'src/app/services/ui.service'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent {
  username: string = ''
  password: string = ''
  constructor(
    private uiService: UiService,
    private userService: UserService
    ){}
  close(){
    this.uiService.logreg_window = false;
  }
  login(){

  }
  register(){
    this.userService.register(this.username, this.password);
  }
}