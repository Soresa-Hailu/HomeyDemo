import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breaked-deal',
  templateUrl: './breaked-deal.component.html',
  styleUrls: ['./breaked-deal.component.scss']
})
export class BreakedDealComponent implements OnInit {

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
    markAsExpired(slug, status) {
    if (slug) {  
     status =  'expired';
      this.http.post(this.commonService.base_url + `/house/markAsExpired/${slug}` ,{status})
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
         .getBreakedHouse(this.alem)
         .subscribe((data: any) => {
             this.houses = data;
         });
         
         }
  
}
