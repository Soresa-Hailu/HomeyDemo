import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-for-sell',
  templateUrl: './house-for-sell.component.html',
  styleUrls: ['./house-for-sell.component.scss']
})
export class HouseForSellComponent implements OnInit {
  title: 'house-for-sell';
  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private realtorService: RealtorService
  ) { }
 houses: any;
 alem;
 destiny;

 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a") || '';
  }

  markAsClaimed(houseSlug, destiny, claim) {
    if (houseSlug) {  
      claim = claim == 'unclaimed' ? 'claimed' : 'unclaimed';
      this.http.post(this.commonService.base_url + `/house/markAsClaimed/${houseSlug}/${destiny}`, { claim } )
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/realtor/house-for-claim`]);
          }
          else this.commonService.changeHeaderMessage({ type: 'danger', message });
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
        });
    }
  }
  ngOnInit() {
   this.alem = this.realtorService.currentRealtor.agent.city;
   this.commonService
       .getHouseForSell(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
