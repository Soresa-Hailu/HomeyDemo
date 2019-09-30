import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accepted-house',
  templateUrl: './accepted-house.component.html',
  styleUrls: ['./accepted-house.component.scss']
})
export class AcceptedHouseComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private homierService: HomierService
  ) { }
 houses: any;
 alem;

 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }

    markAsAccepted(id, status) {
    if (id) {  
      status = status == 'accepted' ? 'rejected' : 'accepted';
      this.http.post(this.commonService.base_url + `/house/markAsAccepted/${id}`, { status } )
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/homier/resumed-house`]);
          }
          else this.commonService.changeHeaderMessage({ type: 'danger', message });
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
        });
    }
  }
 markAsRejected(id, status) {
    if (id) {  
      status = status == 'rejected' ? 'accepted' : 'rejected';
      this.http.post(this.commonService.base_url + `/house/markAsRejected/${id}`, { status } )
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/homier/resumed-house`]);
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
   this.alem = this.homierService.currentHomier.agent.city;
   this.commonService
       .getPostedHouse(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
