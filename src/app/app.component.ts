import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DetailComponent} from "./detail/detail.component";
import {DataService} from "./data.service";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog, private dataService: DataService,
    public snackBar: MatSnackBar) {}

  openDialog(ele = {name: '', active: false, description: ''}): void {

      let dialogRef = this.dialog.open(DetailComponent, {
        width: '350px',
        data: ele
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          if(result.id) this.dataService.editItem(result);
          else this.newIt(result) 
          this.openSnackBar("Action ", "Ok");
        }
       
      }); 
  }
  openDelete(id) {
    let dialogRef = this.dialog.open(YesNoComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataService.deleteItem(id);
        this.openSnackBar("Item Eliminado", "Listo")  } 
    }); 
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  newIt(ev) {
    this.dataService.addItem(ev)
  }
  edit(ev){
    this.openDialog(ev)
  }
  deleteItem(ev){
    this.openDelete(ev.id)
  }
}

@Component({
  selector: 'yes-no',
  template: `   
<h2 mat-dialog-title>Are you sure?</h2>
<mat-dialog-actions>
  <button [mat-dialog-close]="false" mat-button>No</button>
  <!-- Can optionally provide a result for the closing dialog. -->
  <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>
  `
})
export class YesNoComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
