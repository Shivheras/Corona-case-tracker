import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WorldComponent } from './world/world.component';
import { HomeComponent } from './home/home.component';
import { DateComponent } from './date/date.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import {ChartsModule} from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WorldComponent,
    HomeComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,ChartsModule
  ],
  providers: [DatePipe],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
