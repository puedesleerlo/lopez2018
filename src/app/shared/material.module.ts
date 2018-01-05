import { NgModule } from '@angular/core';
import {MatButtonModule, MatRadioModule, MatGridListModule, 
    MatListModule, MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
    MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatRadioModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule],
    exports: [MatButtonModule, MatRadioModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule],
    providers: [],
})
export class MaterialModule { }
