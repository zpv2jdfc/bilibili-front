import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLikeComponent } from './svg-like/svg-like.component';



@NgModule({
  declarations: [
    SvgLikeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgLikeComponent
  ]
})
export class IconModule { }
