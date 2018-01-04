import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, 
    MatListModule, MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule],
    exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, 
        MatToolbarModule, MatIconModule, MatTableModule, MatPaginatorModule],
    providers: [],
})
export class MaterialModule { }
