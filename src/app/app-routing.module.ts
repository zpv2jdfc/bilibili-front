import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {WatchComponent} from './watch/watch.component'
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {SubmissionComponent} from "./submission/submission.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video/:code', component: WatchComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'submit', component: SubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
