import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DetailComponent} from "./detail/detail.component";
import {DataService} from "./data.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog, private dataService: DataService) {}

  openDialog(ele = {name: '', active: false, description: ''}): void {

      let dialogRef = this.dialog.open(DetailComponent, {
        width: '350px',
        data: ele
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          if(result._id) this.dataService.editItem(result);
          else this.newIt(result) 
        }
       
      }); 
  }
  newIt(ev) {
    this.dataService.addItem(ev)
  }
  edit(ev){
    this.openDialog(ev)
  }
  delete(ev){
    console.log("aefa")
  }
}
