import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, Observable} from "rxjs";
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
  getBiu(videoId:number, begin:number, end:number) : Observable<any>{
    let data = {
      videoId : videoId,
      begin : Math.floor(begin),
      end : Math.floor(end)
    }
    return this.http.get(this.infoService.base_url+'/video/getbiu', {params : data, observe : "body"});
  }

  biu(videoId : number, content : string, time : number) : Observable<any> {
    const headers = {'Content-Type' : 'application/json;charset=UTF-8'};
    // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    const data = {
      videoId : videoId,
      content : content,
      time : time
    }
    return this.http.post(this.infoService.base_url+'/video/biu',JSON.stringify(data),{headers : headers});
  }
}
