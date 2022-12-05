import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogregComponent } from './logreg/logreg.component';
import { ChannelComponent } from './home/channel/channel.component';
import { MainComponent } from './home/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendComponent } from './home/recommend/recommend.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogregComponent,
    ChannelComponent,
    MainComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
