import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-for-claim',
  templateUrl: './house-for-claim.component.html',
  styleUrls: ['./house-for-claim.component.scss']
})
export class HouseForClaimComponent implements OnInit {

   constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private realtorService: RealtorService
  ) { }
 houses: any;
 destiny;
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
markAsSold(houseSlug,  destiny, status) {
    if (houseSlug) {
      status = status == 'sell' ? 'sold' : 'acquired';
      this.http.post(this.commonService.base_url + `/house/markAsSold/${houseSlug}/${destiny}`, { status })
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/realtor/sold-house`]);
          }
          else this.commonService.changeHeaderMessage({ type: 'danger', message });
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
        });
    }
  }
markAsUnClaimed(houseSlug, claim) {
    if (houseSlug) {  
      claim = claim == 'claimed' ? 'unclaimed' : 'claimed';
      this.http.post(this.commonService.base_url + `/house/markAsUnClaimed/${houseSlug}`, { claim } )
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/realtor/house-for-sell`]);
          }
          else this.commonService.changeHeaderMessage({ type: 'danger', message });
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
        });
    }
  }
   markAsExpired(slug, status) {
    if (slug) {  
     status =  'expired';
      this.http.post(this.commonService.base_url + `/house/markAsExpired/${slug}` ,{status})
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/realtor/house-for-sell`]);
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
   this.destiny = this.realtorService.currentRealtor.agent._id;
   this.commonService
       .getHouseForClaim(this.destiny)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
