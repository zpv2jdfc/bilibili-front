import { Component } from '@angular/core';
import {UiService} from 'src/app/services/ui.service'
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent {
  constructor(
    public uiService: UiService
    ){}
  close(){
    this.uiService.logreg_window = false;
  }
  login(){

  }
  register(){

  }
}