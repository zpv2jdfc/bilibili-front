import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {WatchComponent} from './watch/watch.component'
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {SubmissionComponent} from "./submission/submission.component";
import {ProfileComponent} from "./profile/profile.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video/:code', component: WatchComponent},
  {path: 'profile/:code', component: ProfileComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'submit', component: SubmissionComponent},
  {path: 'all', component: SearchPageComponent},
  {path: 'chat', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
