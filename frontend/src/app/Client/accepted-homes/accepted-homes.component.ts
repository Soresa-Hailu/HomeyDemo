import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-accepted-homes',
  templateUrl: './accepted-homes.component.html',
  styleUrls: ['./accepted-homes.component.scss']
})
export class AcceptedHomesComponent implements OnInit {

  constructor(private userService: UserService, private commonService: CommonService) { }
 houses: any;
 destiny;
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }

  ngOnInit() {

this.destiny = this.userService.currentUser.user._id;
   this.commonService
       .getAcceptedHouse(this.destiny)
       .subscribe((data: any) => {
           this.houses = data;
         
});

  }

}
