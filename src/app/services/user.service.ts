import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoService } from './info.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private infoService: InfoService) { }
  login(name:string, password:string):Observable<any>{
    var regInfo = {
      identitytype: 'PASSWORD',
      identifier: name,
      credential: password,
    }
    let res = null
    return this.http.post<any>(this.infoService.base_url+'/auth/login', regInfo, {observe: 'response'}).pipe(map(
      (response:any) =>{
        let body = response.body
        if(body.code!='10000'){
          return body
        }
        this.setLocal(body.data,response.headers.get('token'));
        return {'msg':'ok','code':'10000'}
      }
    ));
  }
  register(name:string, password:string): any{
    var regInfo = {
      identitytype: 'PASSWORD',
      identifier: name,
      credential: password,
    }
    return this.http.post<any>(this.infoService.base_url+'/auth/register', regInfo, {observe: 'response'}).pipe(map(
      (response:any) =>{
        let body = response.body
        if(body.code!='10000'){
          return body;
        }
        this.setLocal(body.data,response.headers.get('token'));
        return {'msg':'ok','code':'10000'}
      }
    ));
  }
  logout(){
    this.clearLocal();
    location.reload();
  }
  setLocal(info: any, token:string){
    this.infoService.setLocal(info, token);
  }
  clearLocal(){
    this.infoService.clear();
  }
  test():any{
    return this.http.post<any>('http://v-ming.com:17953/login?email=admin@demo.com&password=123456',{},{});
  }
}
