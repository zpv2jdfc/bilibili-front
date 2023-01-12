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
  sendComment(videoId : number, content : string){
    let data = {
      videoId : videoId,
      content : content,
      dateTime : new Date()
    }
    return this.http.post(this.infoService.base_url+'/video/addComment',data,{observe : "response"});
  }
  loadComment(videoId : number){
    let data = {
      videoId : videoId,
    }
    return this.http.get(this.infoService.base_url+'/video/getComment',{params : data});
  }
  searchByBVCode(code:string):Observable<any>{
    return this.http.get<any>(this.infoService.base_url+'/video/watch/'+code);
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
