import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoService} from "./info.service";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient, private infoService : InfoService) { }

  private subject = new Subject<any>();
  private alreadyUpload = []
  /**
   * 把文件分片后发送到服务端
   * @param file
   */
  checkChunk(md5:string) : Observable<any>{
    let data = {
      md5File:md5
    }
    return this.http.get(this.infoService.base_url+'/file/checkChunk', {params:data});
  }
  checkFile(md5:string) : Observable<any>{
    let data = {
      md5File:md5
    }
    return this.http.get(this.infoService.base_url+'/file/checkFile', {params:data});
  }
  submit(file : any, md5 : string) {
    this.checkFile(md5).subscribe(
      data=>{
        if(data == true){
          this.subject.next({
            index : -1,
            count : -1,
          })
        }else {
          this.checkChunk(md5).subscribe(
            data=>{
              this.alreadyUpload = data.data;
              this.submitFile(file, md5);
            }
          )
        }
      }
    )
  }
  submitFile(file : any, md5 : string) : string{

    let max = 1024 * 1024;
    let count = Math.ceil(file.size / max);
    let index = 0;
    let chunks = [];
    if (count > 100) {
      max = file.size / 100;
      count = 100;
    }
    while (index < count) {
      chunks.push({
        file: file.slice(index * max, (index + 1) * max),
        chunk: index,
        total: count,
        md5File: md5
      });
      index++;
    }
    index = 0;
    const finalled = () => {
      index ++;
      this.subject.next({
        index : index,
        count : count,
      })
      if(index < count) return;
      // 当所有切片上传成功，调用后端合并切片的请求，进行切片合并操作
      this.merge(md5, count)
    }
    chunks.forEach(chunk => {
          /*
      已经上传的无需在上传
      already中存在的是：通过请求接口，获取已经上传的文件信息
      */
      // if(already.length > 0 && already.includes(chunk.filename)){
      //   finalled();
      //   return;
      // }
      for(let item of this.alreadyUpload){
        if(item==chunk.chunk){
          finalled();
          return;
        }
      }
      let fm = new FormData();
      fm.append('file', chunk.file);
      fm.append('chunk', chunk.chunk);
      fm.append('total', chunk.total);
      fm.append('md5File', chunk.md5File);
      this.http.post(this.infoService.base_url+'/file/upload', fm, {headers : this.infoService.headers}).subscribe((data:any)=>{
        if(data === true){
          finalled();
          return;
        }
      })

    })
    return md5;
  }

  /**
   * 合并文件
   */
  merge(md5:string, count : number){
    let data = {
      md5File : md5,
      total : count,
    }
    this.http.post(this.infoService.base_url+'/file/merge',data, {headers : this.infoService.headers}).subscribe((data)=>{
      this.subject.next({
        index : -1,
        count : -1,
      })
    })
  }

  /**
   * 观察者
   */
  getMessage() : Observable<any>{
    return this.subject.asObservable();
  }

  uploadInfo(title:string, cover:any, descript:string, label:string, md5:string) : Observable<any>{
    let fm = new FormData();
    fm.append('title',title)
    fm.append('cover',cover)
    fm.append('descript',descript)
    fm.append('label',label)
    fm.append('md5', md5)

    return this.http.post(this.infoService.base_url+'/video/upload', fm , {headers : this.infoService.headers})
  }
}
