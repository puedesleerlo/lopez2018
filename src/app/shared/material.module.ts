import { NgModule } from '@angular/core';
import {MatButtonModule, MatRadioModule, MatGridListModule, 
    MatListModule, MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
    MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatRadioModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule],
    exports: [MatButtonModule, MatRadioModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule],
    providers: [],
})
export class MaterialModule { }
