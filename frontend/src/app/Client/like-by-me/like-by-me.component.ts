import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import { LoginService } from '../../common/services/login.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-by-me',
  templateUrl: './like-by-me.component.html',
  styleUrls: ['./like-by-me.component.scss']
})
export class LikeByMeComponent implements OnInit {

  constructor(
          private userService: UserService,
          private router: Router,
          private http: HttpClient,
          private commonService: CommonService) { }
 houses: any;
 destiny;
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
    unlikedByUsers(_id, id){
    this.http.put(`${this.commonService.base_url}/house/unlikedByUsers`, {_id, id })
    .subscribe(res => {
      console.log({res});
    })
  }
  ngOnInit() {
  this.destiny = this.userService.currentUser.user._id;
   this.commonService
       .getLikeByMe(this.destiny)
       .subscribe((data: any) => {
           this.houses = data;
         
});
  }

}
