import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { InfoService } from './info.service';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient, private infoService : InfoService) { }

  searchByBVCode(code:string):Observable<any>{
    var regInfo = {
      BVCode: code,
    }
    let res = null
    return this.http.post<any>(this.infoService.base_url+'/video/search', regInfo, {observe: 'response'}).pipe(map(
      (response:any) =>{
        let body = response.body
        if(body.code!='10000'){
          return body
        }
        return {'msg':'ok','code':'10000'}
      }
    ));
  }
}
