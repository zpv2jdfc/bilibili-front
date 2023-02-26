import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  base_url = '/api'
  src_url = 'http://www.v-ming.com/src'
  profile_url = "http://www.v-ming.com/profile"
  domain_url = "http://www.v-ming.com"

  log_state = false
  token = ''
  headers = new HttpHeaders();
  info = {
    id: '',
    nickName:'',
    signature:'',
    avatar:this.domain_url+'/avatar/unlog.jpg',
    level:'',
    privilege:'',
    status:0,
    setting:'',
    url:'',
  }
  init(){
    let temp1 = localStorage.getItem('token');
    let temp2 = localStorage.getItem('info');
    if(temp1!=null && temp1.length>0 && temp2!=null && temp2.length>0){
      this.token = temp1;
      this.info = JSON.parse(temp2)
      this.info.url = '/profile/' + this.info.id
      this.log_state = true;
      // this.headers = new HttpHeaders({'token':temp1, 'id' : String(this.info.id)});
      this.headers = this.headers.append('token', temp1)
      this.headers = this.headers.append('id', String(this.info.id))
      this.headers = this.headers.append('Authorization', temp1)
    }
  }
  setLocal(info:any, token:string){
    if(info.avatar==null || info.avatar == 'default' || info.avatar =='')
        info.avatar = this.domain_url + '/avatar/default.jpg'
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('token', token);
  }
  clear() {
    this.info = {
      id: '',
      nickName:'',
      signature:'',
      avatar:this.domain_url+'/avatar/unlog.jpg',
      level:'',
      privilege:'',
      status:0,
      setting:'',
      url:'',
    }
    localStorage.removeItem('token')
    localStorage.removeItem('info')
    this.log_state = false
    this.headers = new HttpHeaders();
  }
}
