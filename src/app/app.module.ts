import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, YesNoComponent } from './app.component';
import {SharedModule } from "./shared/shared.module";
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailComponent } from './detail/detail.component'
import {DataService} from "./data.service"
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent,
    DetailComponent,
    YesNoComponent
  ],
  entryComponents: [YesNoComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
