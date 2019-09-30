import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sold-house',
  templateUrl: './sold-house.component.html',
  styleUrls: ['./sold-house.component.scss']
})
export class SoldHouseComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private realtorService: RealtorService
  ) { }
 houses: any;
 alem;
 
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
  ngOnInit() {
   this.alem = this.realtorService.currentRealtor.agent.city;
   this.commonService
       .getSoldHouse(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
