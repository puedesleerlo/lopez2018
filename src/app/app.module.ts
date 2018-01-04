import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule } from "./shared/shared.module";
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailComponent } from './detail/detail.component'
import {DataService} from "./data.service"

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
