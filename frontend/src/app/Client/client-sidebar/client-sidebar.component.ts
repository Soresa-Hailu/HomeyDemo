import { Component, OnInit } from '@angular/core';
import User from '../../User';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.scss']
})
export class ClientSidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  user: User[];
  constructor(private userService: UserService,  private commonService: CommonService) { }

 houses: any;
 rejections: any;
 destiny;
 alem;
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
this.alem = this.userService.currentUser.user._id;
   this.commonService
       .getRejectedHouse(this.alem)
       .subscribe((data: any) => {
           this.rejections = data;
         
});
  }

}
