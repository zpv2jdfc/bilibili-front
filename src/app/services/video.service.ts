import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
    let params = new HttpParams();
    params.set('videoId',videoId);
    params.set('begin',begin);
    params.set('end',end);
    const options = {params:params};
    return this.http.get(this.infoService.base_url+'/video/getbiu',options);
  }
}
