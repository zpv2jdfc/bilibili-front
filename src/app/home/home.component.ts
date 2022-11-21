import { Component } from '@angular/core';
import {InfoService} from 'src/app/services/info.service'
import {UiService} from 'src/app/services/ui.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public infoService: InfoService,
    public uiService: UiService
    ){}
}
