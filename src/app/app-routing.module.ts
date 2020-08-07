import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from 'src/app/search/search.component'
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { DateComponent } from './date/date.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'date',component:DateComponent},
  {path:'world',component:WorldComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
