import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() edited: EventEmitter<Element> = new EventEmitter<Element>()
  @Output() delete: EventEmitter<Element> = new EventEmitter<Element>()
  items: Element[]
  displayedColumns = ['name', 'status', 'description', 'options'];
  dataSource: MatTableDataSource<Element>;

  @ViewChild('filter') filterName: ElementRef;
  @ViewChild('filter2') filterDescription: ElementRef;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.data.getItems().subscribe(data => {
      
      this.items = data;
      this.dataSource.data = this.items;

    });
    
    Observable.fromEvent(this.filterName.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.name.toLowerCase().includes(filter.toLowerCase());
        }
        this.dataSource.filter = this.filterName.nativeElement.value;
      });
    Observable.fromEvent(this.filterDescription.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.description.toLowerCase().includes(filter.toLowerCase());
        }
        this.dataSource.filter = this.filterDescription.nativeElement.value;
      });

  }
  pagChanges(page: Page) {
    let startIndex = (page.pageIndex) * page.pageSize;
    let endIndex = (page.pageIndex + 1) * page.pageSize;
    this.dataSource.data = this.items.slice(startIndex, endIndex);
  }
  editItem(il: Element) {
    this.edited.emit(il)
  }
  deleteItem(il:Element) { 
    this.delete.emit(il)    
  }
}
interface Page {
  pageIndex: number,
  pageSize: number,
  length: number
}
