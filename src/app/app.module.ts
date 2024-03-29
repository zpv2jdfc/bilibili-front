import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import {IconModule} from './icon/icon.module'
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
import { WatchComponent } from './watch/watch.component';
import { VideoComponent } from './watch/video/video.component';
import { LeftVideoComponent } from './watch/video/left-video/left-video.component';
import { RightRecommendComponent } from './watch/video/right-recommend/right-recommend.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmitPageComponent } from './submission/submit-page/submit-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-page/search-result/search-result.component';
import { MessageComponent } from './message/message.component';
import { TalkComponent } from './message/talk/talk.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogregComponent,
    ChannelComponent,
    MainComponent,
    RecommendComponent,
    WatchComponent,
    VideoComponent,
    LeftVideoComponent,
    RightRecommendComponent,
    NotFoundComponent,
    SubmissionComponent,
    SubmitPageComponent,
    ProfileComponent,
    UserInfoComponent,
    SearchPageComponent,
    SearchResultComponent,
    MessageComponent,
    TalkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
