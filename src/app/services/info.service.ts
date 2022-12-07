import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  base_url = '/api'
  log_state = false
  token = ''

  info = {
    id: '',
    name:'',
    signature:'',
    avatar:'',
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
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('token', token);
  }
  clear() {
    this.info = {
      id: '',
      name:'',
      signature:'',
      avatar:'',
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
