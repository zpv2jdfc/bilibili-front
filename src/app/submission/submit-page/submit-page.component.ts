import {Component, ViewChild} from '@angular/core';
import {UploadService} from 'src/app/services/upload.service'
import {InfoService} from "../../services/info.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent {
  @ViewChild('inputElement')
  hideElement;

  @ViewChild('progress')
  progressElement

  @ViewChild('videoElement')
  videoElement;

  @ViewChild('canvasElement')
  canvasElement;

  // 视频文件
  current_file : File;
  //选择文件
  chooseFile : boolean = true;
  // 正在上传
  uploading : boolean = false;
  // 上传完成
  uploadFinished : boolean = false;
  // 成功提交审核
  upSuccess : boolean = false;
  // 提示信息
  tips : string = '上传中'

  // 视频基本信息
  title : string;
  cover : any;
  descript : string;
  label : string;
  fileMd5 : string;
  constructor(private uploadService : UploadService, private infoService : InfoService, private uiService : UiService) {
  }
  selectedFile : any;
  check(){
    if(this.infoService.log_state == false){
      this.uiService.logreg_window = true;
      return;
    }
    this.hideElement.nativeElement.click();
  }
  getFile(e){
    this.chooseFile = false;
    this.uploading = true;
    this.title = e.target.files[0].name.substring(0,e.target.files[0].name.lastIndexOf('.'));
    this.current_file = e.target.files[0];
    // this.fileMd5 = this.uploadService.submit(e.target.files[0]);
    var sparkMD52 = new SparkMD5.ArrayBuffer()
    var reader2 = new FileReader()
    reader2.readAsArrayBuffer(e.target.files[0])
    reader2.onload = (event) => {
      let value = event.target.result
      sparkMD52.append(value)
      let md5 = sparkMD52.end()
      this.fileMd5 = this.uploadService.submit(e.target.files[0], md5);
    }
  }

  ngOnInit(){
    this.uploading = false;
    this.tips = '上传中'
    this.uploadFinished = false;
    this.uploadService.getMessage().subscribe(
      data=>{
        if(data.index==-1){
          this.tips = '上传成功'
          this.uploadFinished = true;
          this.createCover();
          return;
        }
        this.progressElement.nativeElement.style.width = data.index / data.count * 800 + 'px';
      }
    )
  }

  createCover(){
    const imgWidth=264,imgHeight=148;  // 定义生成图片的宽高，其他宽高需求可以自己改
    // let videoElement = this.videoElement.nativeElement;
    let videoElement = <HTMLVideoElement>document.createElement('video');
    videoElement.src  = URL.createObjectURL(this.current_file);
    videoElement.currentTime = 1;
    // videoElement.load()
    // videoElement.oncanplay = ()=>{
    //   console.log(videoElement.getBoundingClientRect())
    //   let videoWidth = videoElement.width;
    //   let videoHeight = videoElement.height;
    //   let x = 0, y = 0, width = 0, height = 0;
    //   // 计算缩小后图片的宽高以及canvas绘制的位置信息
    //   if (videoWidth / videoHeight >= 1.5) {
    //     width = imgWidth ;
    //     height = videoHeight * (imgWidth / videoWidth);
    //     x = 0;
    //     y = (imgHeight- height) / 2;
    //   } else {
    //     height = imgHeight;
    //     width = videoWidth * (imgHeight / videoHeight);
    //     y = 0;
    //     x = (imgWidth - width) / 2;
    //   }
    //   var canvas = <HTMLCanvasElement>document.getElementById('canvasElement');
    //   var ctx = canvas.getContext("2d");
    //   ctx.fillRect(0, 0, imgWidth , imgHeight);
    //   ctx.drawImage(videoElement, x, y, width, height);
    //   // ctx.drawImage(videoElement, x, y, imgWidth, imgHeight);
    //   let src = canvas.toDataURL("image/jpeg",0.3); // 完成base64图片的创建
    //   this.coverblob(src)
    // }
    videoElement.addEventListener("loadeddata",()=>{
        let videoWidth = imgWidth;
        let videoHeight = imgHeight;
        let x = 0, y = 0, width = 0, height = 0;
        // 计算缩小后图片的宽高以及canvas绘制的位置信息
        if (videoWidth / videoHeight >= 1.5) {
          width = imgWidth ;
          height = videoHeight * (imgWidth / videoWidth);
          x = 0;
          y = (imgHeight- height) / 2;
        } else {
          height = imgHeight;
          width = videoWidth * (imgHeight / videoHeight);
          y = 0;
          x = (imgWidth - width) / 2;
        }
        var canvas = <HTMLCanvasElement>document.getElementById('canvasElement');
        var ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, width , height);
        ctx.drawImage(videoElement, 0, 0);
        // ctx.drawImage(videoElement, x, y, imgWidth, imgHeight);
        let src = canvas.toDataURL("image/jpeg",0.3); // 完成base64图片的创建
        this.coverblob(src)
    })
  }
  coverblob(src:string){
    this.cover = src
  }
  upload(){
    this.uploadService.uploadInfo(this.title,this.cover,this.descript,this.label,this.fileMd5).subscribe(
      data=>{
        this.chooseFile = false;
        this.uploading = false;
        this.uploadFinished = false;
        this.upSuccess = true;
      }
    )
  }
  return(){
    location.reload()
  }
}
