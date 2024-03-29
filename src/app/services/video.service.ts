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
    return this.http.post(this.infoService.base_url+'/video/addComment',data,{headers:this.infoService.headers, observe : "response"});
  }
  sendSubComment(videoId : number, parentId : number, replyId : number, replyName : string, replyUrl : string, content : string){
    let data = {
      videoId : videoId,
      content : content,
      parentId : parentId,
      replyId : replyId,
      dateTime : new Date()
    }
    return this.http.post(this.infoService.base_url+'/video/addSubComment',data,{headers:this.infoService.headers,observe : "response"});
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

  searchVideoBytitle(title:string) : Observable<any>{
    let data = {
      title:title
    }
    return this.http.get(this.infoService.base_url+'/video/all',{params:data});
  }
  getHottest():Observable<any>{
    return this.http.get(this.infoService.base_url+'/video/hottest');
  }
  getUpInfoByBVCode(code:string):Observable<any>{
    let param = {
      code:code,
    }
    return this.http.get(this.infoService.base_url+'/video/upInfo',{params:param});
  }
  thumb(bvcode:string, userid:string, ops) : Observable<any>{
    let data = {
      bvCode:bvcode,
      userId : userid
    }
    if(ops==true){
      return this.http.post(this.infoService.base_url+'/video/thumb', {},{params:data,headers: this.infoService.headers})
    }else {
      return this.http.post(this.infoService.base_url+'/video/unthumb', {},{params:data,headers: this.infoService.headers})
    }
  }
  getthumb(bvcode:string) : Observable<any>{
    let data = {
      bvCode:bvcode,
    }
    return this.http.get(this.infoService.base_url+'/video/getthumb', {params:data});
  }
}
