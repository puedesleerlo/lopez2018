import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewComponent} from "./new/new.component";
import {DetailComponent} from "./detail/detail.component"
const routes: Routes = [
  { path: '', component: NewComponent},
  { path: 'edit/:id', component: DetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
