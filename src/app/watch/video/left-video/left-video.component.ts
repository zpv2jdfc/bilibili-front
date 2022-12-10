import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import HLS from 'hls.js'
@Component({
  selector: 'app-left-video',
  templateUrl: './left-video.component.html',
  styleUrls: ['./left-video.component.css']
})
export class LeftVideoComponent {
  @Input() video_info : any;
  hls:any;
  @ViewChild("video")
  video : ElementRef;
  ngOnInit(){
    this.hls = new HLS();
    // this.hls.loadSource(this.video_info.url)
    // this.hls.loadSource("http://1.116.112.80/src/video/test/test.m3u8");
    // this.hls.attachMedia(this.video);
    // this.hls.on(HLS.Events.MANIFEST_PARSED, function() {
    //   this.video.play();});
  }
  start(){
    if (HLS.isSupported()) {
      var video = <HTMLVideoElement>document.getElementById('video');
      this.hls.attachMedia(video);
      this.hls.loadSource('http://1.116.112.80/src/video/test/test.m3u8');
    }
  }
}
