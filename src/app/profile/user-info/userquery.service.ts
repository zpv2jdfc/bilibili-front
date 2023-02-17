import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoService} from "../../services/info.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserqueryService {

  constructor(private http: HttpClient, private infoService : InfoService) { }
  quryById(id:number) : Observable<any>{
    let data = {
      id:id,
    }
    return this.http.get(this.infoService.base_url + '/profile/info', {params : data});
  }
  updateInfo(name : string, signature : string){
    let data = {
      name : name,
      signature : signature,
    }
    this.http.post(this.infoService.base_url + '/profile/updateInfo', data, {headers : this.infoService.headers}).subscribe()
  }

  updateAvatar(avatar : any){
    let fm = new FormData();
    fm.append('avatar',avatar)

    this.http.post(this.infoService.base_url + '/profile/updateAvatar', fm, {headers : this.infoService.headers}).subscribe()
  }
}
