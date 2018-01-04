import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  items: any[] = require("./fake.json");

  constructor() { }

  getItems() {
    return this.items;
  }

}
