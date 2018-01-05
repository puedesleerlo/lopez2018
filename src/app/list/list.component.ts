import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from "./../data.service"
import { MatTableDataSource } from '@angular/material';
import { Element } from "./../item.model";
import { MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Element[]
  displayedColumns = ['name', 'status', 'description', 'options'];
  dataSource: MatTableDataSource<Element>;

  @ViewChild('filter') filterName: ElementRef;
  @ViewChild('filter2') filterDescription: ElementRef;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.items = this.data.getItems();
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.items;
    Observable.fromEvent(this.filterName.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.name == filter
        }
        this.dataSource.filter = this.filterName.nativeElement.value;
      });
    Observable.fromEvent(this.filterDescription.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.description == filter
        }
        this.dataSource.filter = this.filterDescription.nativeElement.value;
      });

  }
  pagChanges(page: Page) {
    let startIndex = (page.pageIndex) * page.pageSize;
    let endIndex = (page.pageIndex + 1) * page.pageSize;
    this.dataSource.data = this.items.slice(startIndex, endIndex);
  }
  editItem() {
    
  }
  deleteItem() { 
        
  }
}
interface Page {
  pageIndex: number,
  pageSize: number,
  length: number
}
