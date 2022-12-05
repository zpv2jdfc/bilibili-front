import { Component,ViewChild  } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {RecommendService} from './recommend.service'
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {
  constructor(private recommendService: RecommendService) {
  }
  recommend_carsouels = []
  recommend_grids = []
  ngOnInit(){
    this.recommendService.load().subscribe(
      (res:any)=> {
        this.recommend_carsouels = res.recommend_carsouels;
        this.recommend_grids = res.recommend_grids;
      }
    )
  }

}
