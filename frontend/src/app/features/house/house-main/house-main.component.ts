import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.scss']
})
export class HouseMainComponent implements OnInit {

  constructor() { }

  buttons = [
    {
      name: 'All Houses',
      route: 'all'
    },
    {
      name: 'Active Houses',
      route: 'active'
    },
    {
      name: 'Sold/Acquired',
      route: 'sold'
    },
    {
      name: 'Inactive Houses',
      route: 'inactive'
    }
  ]

  ngOnInit() { 
  }

}
