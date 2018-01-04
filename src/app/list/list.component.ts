import { Component, OnInit } from '@angular/core';
import {DataService} from "./../data.service"
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Element[]
  displayedColumns = ['name', 'status', 'description'];
  dataSource: any 
  constructor(private data: DataService) {
    
   }

  ngOnInit() {
    this.items = this.data.getItems();
    this.dataSource = new ExampleDataSource(this.items);
  }

}

export interface Element {
  name: string;
  description: string;
  status: string;
  isActive: boolean;
  _id: string;
  index: number;
}



/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private data: any[]) {
    super();
  }
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}