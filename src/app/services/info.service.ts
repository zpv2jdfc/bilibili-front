import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  base_url = '/api'
  log_state = false
  token = ''

  info = {
    name:'',
    signature:''
  }
  init(){

  }
  login(){
    
  }
  logout(){

  }
}