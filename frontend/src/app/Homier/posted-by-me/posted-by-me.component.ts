import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posted-by-me',
  templateUrl: './posted-by-me.component.html',
  styleUrls: ['./posted-by-me.component.scss']
})
export class PostedByMeComponent implements OnInit {

   constructor(
    private commonService: CommonService,
    private router: Router,
    private http: HttpClient,
    private homierService: HomierService
  ) { }
 houses: any;
 alem;
 mainErrorMessage = {
    type: '',
    message: ''
  }
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
 changePrice(_id, price){
    this.http.put(`${this.commonService.base_url}/house/changePrice`, {_id, price })
    .subscribe(res => {
    this.mainErrorMessage.type = 'success';
    this.mainErrorMessage.message = 'Price Updated successfully';
      console.log({res});
    })
  }

  ngOnInit() {
   this.alem = this.homierService.currentHomier.agent._id;
   this.commonService
       .getPostedByMe(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
}
