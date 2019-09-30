import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
   

   constructor(
    private userService: UserService,
    private commonService: CommonService
  ) { }

  userID;
  UserDetails: any = {
  };
  isEditing = false;
  lastEdited = '';

  getcurrentUserDetails(userId) {
    this.commonService.togglePageLoaderFn(true);
    this.userService.getcurrentUserDetails(userId)
      .subscribe((result: any) => {
        this.UserDetails = result;
        this.lastEdited = result && result.updatedOn && moment(result.updatedOn).format('MMMM Do YYYY, h:mm:ss a') || '';
        this.commonService.togglePageLoaderFn(false);
      });
  }

 

  updateProfilefn(data) {
  console.log(data);
  }

  ngOnInit() {
    this.userID = this.userService.currentUser.user._id;
    this.getcurrentUserDetails(this.userID);


  }

}
