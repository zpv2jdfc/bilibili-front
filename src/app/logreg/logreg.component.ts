import { Component } from '@angular/core';
import {UiService} from 'src/app/services/ui.service'
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent {
  username: string = ''
  password: string = ''
  logerr: boolean = false
  err_msg: string = ''
  constructor(
    private uiService: UiService,
    private userService: UserService
    ){}
  close(){
    this.uiService.logreg_window = false;
  }
  login(){
    this.userService.login(this.username, this.password).subscribe((res:any)=>{
      if(res.code != '10000'){
        this.err_msg = res.msg;
        this.logerr = true;
      }else{
        this.err_msg = '';
        this.logerr = false;
        location.reload();
      }
    });

  }
  register(){
    this.userService.register(this.username, this.password).subscribe((res:any)=> {
        if (res.code != '10000') {
          this.err_msg = res.msg;
          this.logerr = true;
        } else {
          this.err_msg = '';
          this.logerr = false;
          location.reload();
        }
      }
    );
  }
}
