import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, 
    MatListModule, MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
    MatDialogModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule, MatInputModule,
        MatDialogModule],
    providers: [],
})
export class MaterialModule { }
