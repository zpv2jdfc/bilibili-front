import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  onScroll(){
    console.log("scrolled!!");
  }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
}
