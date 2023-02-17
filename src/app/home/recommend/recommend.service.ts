import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { InfoService } from 'src/app/services/info.service';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http: HttpClient, private infoService: InfoService) { }


  load():any{
    let headerOption = { headers: new HttpHeaders({ "Content-Type": 'application/json',"Authorization":this.infoService.token})}
    return this.http.post<any>(this.infoService.base_url+'/home/recommend',{observe: 'response'},headerOption).pipe(map(
      (response:any) =>{
        let data = response.data
        return data
      }
    ));
  }

  loadVideoPage(page : number) : Observable<any>{
    let data = {
      page : page,
    }
    return this.http.get(this.infoService.base_url + '/video/homeScroll', {params:data});
  }
  loadFirstPageVideo() : Observable<any>{
    return this.http.get(this.infoService.base_url + '/video/firstPageVideo');
  }
}
