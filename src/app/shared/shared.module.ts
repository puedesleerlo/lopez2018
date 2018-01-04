import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from "./material.module"
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule, 
    BrowserAnimationsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
