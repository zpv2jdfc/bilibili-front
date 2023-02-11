import {Component, ViewChild} from '@angular/core';
import {UploadService} from 'src/app/services/upload.service'

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent {
  @ViewChild('inputElement')
  hideElement;

  constructor(private uploadService : UploadService) {
  }
  selectedFile : any;
  check(){
    this.hideElement.nativeElement.click();
  }
  getFile(e){
    this.uploadService.submit(e.target.files[0])
    console.log('1')
  }
}
