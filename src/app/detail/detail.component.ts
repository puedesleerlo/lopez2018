import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  form: FormGroup
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm(data);
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(data) {
    this.form = this.fb.group({
      id: data.id,
      index: data.index,
      name: [data.name, Validators.required], 
      isActive: [data.isActive, Validators.required],
      description: [data.description, Validators.required]
    });
  }
  item(el){
    this.dialogRef.close(el)
  }

}
