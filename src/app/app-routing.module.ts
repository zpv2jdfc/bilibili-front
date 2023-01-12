import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {WatchComponent} from './watch/watch.component'
import {NotFoundComponent} from "./error/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video/:code', component: WatchComponent},
  {path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
