import { Injectable } from '@angular/core';

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

  info = {
    id: '',
    name:'',
    signature:'',
    avatar:this.domain_url+'/avatar/unlog.jpg',
    level:'',
    privilege:'',
    status:'',
    setting:'',
  }
  init(){
    let temp1 = localStorage.getItem('token');
    let temp2 = localStorage.getItem('info');
    if(temp1!=null && temp1.length>0 && temp2!=null && temp2.length>0){
      this.token = temp1;
      this.info = JSON.parse(temp2)
      this.log_state = true;
    }
  }
  setLocal(info:any, token:string){
    info.avatar = this.domain_url + info.avatar;
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('token', token);
  }
  clear() {
    this.info = {
      id: '',
      name:'',
      signature:'',
      avatar:this.domain_url+'/avatar/unlog.jpg',
      level:'',
      privilege:'',
      status:'',
      setting:'',
    }
    localStorage.removeItem('token')
    localStorage.removeItem('info')
    this.log_state = false
  }
}
