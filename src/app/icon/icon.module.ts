import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLikeComponent } from './svg-like/svg-like.component';
import { SvgSupportComponent } from './svg-support/svg-support.component';



@NgModule({
  declarations: [
    SvgLikeComponent,
    SvgSupportComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgLikeComponent,
    SvgSupportComponent
  ]
})
export class IconModule { }
