import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realtor-main',
  templateUrl: './realtor-main.component.html',
  styleUrls: ['./realtor-main.component.css']
})
export class RealtorMainComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private realtorService: RealtorService
  ) { }
 rented: any;
 sold: any;
 claimed: any;
 destiny
 selled: any;
 alem;
  ngOnInit() {
   this.alem = this.realtorService.currentRealtor.agent.city;
   this.destiny = this.realtorService.currentRealtor.agent._id;
   this.commonService
       .getRentedHouse(this.alem)
       .subscribe((data: any) => {
           this.rented = data;
         
});
this.commonService
       .getSoldHouse(this.alem)
       .subscribe((data: any) => {
           this.sold = data;
         
});
 this.commonService
       .getHouseForClaim(this.destiny)
       .subscribe((data: any) => {
           this.claimed = data;
         
});
 this.commonService
       .getHouseForSell(this.alem)
       .subscribe((data: any) => {
           this.selled = data;
         
});
  }

}
