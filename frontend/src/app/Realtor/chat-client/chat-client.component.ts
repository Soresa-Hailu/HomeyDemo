import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent implements OnInit {
 title: 'house-for-sell';
  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private realtorService: RealtorService
  ) { }
 houses: any;
 alem;
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a") || '';
  }

  markAsSeen(house_id,destiny) {
      destiny='seen'
      this.http.post(this.commonService.base_url + `/house/markAsSeen/${house_id}`, {destiny} )
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
  ngOnInit() {
   this.alem = this.realtorService.currentRealtor.agent._id;
   this.commonService
       .getHouseRequests(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
