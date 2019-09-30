import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-notification-preferences',
  templateUrl: './notification-preferences.component.html',
  styleUrls: ['./notification-preferences.component.scss']
})
export class NotificationPreferencesComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private http: HttpClient,
    private userService: UserService
  ) { }

  userDetail = [];
   mainErrorMessage = {
    type: '',
    message: ''
  }

  getUserList() {
    this.http.get(`${this.commonService.base_url}/auth/user/userDetail/${this.userService.currentUser.user._id}`)
      .subscribe((response: any) => {
        if (response && response.data) this.userDetail = response.data
      },
        () => { },
        () => { this.commonService.togglePageLoaderFn(false); }
      )
  }

  changePass(_id, password){
    this.http.put(`${this.commonService.base_url}/auth/user/changePass`, {_id, password })
    .subscribe(res => {
      this.mainErrorMessage.type = 'success';
      this.mainErrorMessage.message = 'You successfully changed your password Now logout and login again';
      console.log({res});
    })
  }

  ngOnInit() {
    this.getUserList();
  }

}
