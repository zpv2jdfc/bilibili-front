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
  logtype : number = 1;
  username: string = ''
  password: string = ''
  verificationCode : string = ''
  logerr: boolean = false
  err_msg: string = ''
  countDown : string = ''
  constructor(
    private uiService: UiService,
    private userService: UserService
    ){}
  close(){
    this.uiService.logreg_window = false;
  }
  changeLogType(type:number){
    this.logtype = type;
  }
  login(){
    let pwd = this.password;
    if(this.logtype==2){
      pwd = this.verificationCode;
    }
    this.userService.login(this.logtype,this.username, pwd).subscribe((res:any)=>{
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
    let pwd = this.password;
    if(this.logtype==2){
      pwd = this.verificationCode;
    }
    this.userService.register(this.logtype,this.username, pwd).subscribe((res:any)=> {
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
  disableEmail(){
    this.userService.sendVerificationVode(this.username).subscribe(
      res=>{
        if (res.code != '10000') {
          this.err_msg = res.msg;
          this.logerr = true;
        } else {
          this.err_msg = '';
          this.logerr = false;
        }
      }
    )
    let bt = document.getElementById("emailElement")
    // bt.disabled = true;css("pointer-events", "none")
    bt.style.cssText="pointer-events:none";
    this.timeOut(bt,30);
  }
  timeOut(bt,count:number){
    this.countDown = String(count);
    if(count==0){
      this.countDown = '';
      bt.style.cssText="pointer-events:auto";
    }else {
      setTimeout(()=>{
        this.timeOut(bt, count-1);
      }, 1000);
    }
  }
}
