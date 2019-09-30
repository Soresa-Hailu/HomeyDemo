import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rented-house',
  templateUrl: './rented-house.component.html',
  styleUrls: ['./rented-house.component.scss']
})
export class RentedHouseComponent implements OnInit {

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
       .getRentedHouse(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
