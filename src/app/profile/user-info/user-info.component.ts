import {Component, Input, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InfoService} from "../../services/info.service";
import {UiService} from "../../services/ui.service";
import {UserqueryService} from './userquery.service'
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input()
  user_code : any;
  video_list = []
  user_info : any = {
    avatar:null,
  };
  empty : boolean = true;
  // 查看自己的空间 ，  可以改名字 头像 签名
  myself : boolean = false;

  @ViewChild('inputElement')
  hideElement;
  constructor(private userqueryService: UserqueryService,
              public infoService: InfoService,
              public uiService: UiService
  ){}
  ngOnInit(){
    this.init()
  }
  init(){
    if(this.user_code == this.infoService.info.id){
      this.myself = true;
    }
    this.userqueryService.quryById(this.user_code).subscribe(
      data=>{
        this.user_info = data.data;
        if(this.user_info.avatar == 'default' || this.user_info.avatar==null || this.user_info.avatar==''){
          this.user_info.avatar = 'http://www.v-ming.com/avatar/default.jpg'
        }
        for(let video of data.data.videoList){
          video.url = '/video/'+ video.id
          this.video_list.push(video)
        }
        if(this.video_list.length!=0) {
          this.empty = false;
        }
      }
    )
  }

  changeInfo(){
    this.userqueryService.updateInfo(this.user_info.nickName, this.user_info.signature)
  }

  getAvatar(e : any){
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e)=>{
      let img = new Image();
      img.src = reader.result.toString();
      img.onload = ()=>{
        var canvas = <HTMLCanvasElement>document.createElement("canvas");
        canvas.width=img.width;
        canvas.height=img.height;
        // canvas.width = width ? width : img.width;
        // canvas.height = height ? height : img.height;
        let x = 0, y = 0, width = 0, height = 0;
        // 计算缩小后图片的宽高以及canvas绘制的位置信息
        let videoWidth = img.width;
        let videoHeight = img.height;
        if (videoWidth / videoHeight >= 1.5) {
          width = img.width ;
          height = videoHeight * (img.width / videoWidth);
          x = 0;
          y = (img.height- height) / 2;
        } else {
          height = img.height;
          width = videoWidth * (img.height / videoHeight);
          y = 0;
          x = (img.width - width) / 2;
        }
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png",0.1);
        this.userqueryService.updateAvatar(dataURL);
      }

    }

  }
  check(){
    this.hideElement.nativeElement.click();
  }
}
