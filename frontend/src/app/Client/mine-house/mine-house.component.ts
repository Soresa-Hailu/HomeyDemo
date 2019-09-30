import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../../resolve-emit';

@Component({
  selector: 'app-mine-house',
  templateUrl: './mine-house.component.html',
  styleUrls: ['./mine-house.component.scss']
})
export class MineHouseComponent implements OnInit {
  settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
  constructor(private userService: UserService,private router: Router,
    private http: HttpClient,private commonService: CommonService,  private _confirmation: ConfirmationService) { }
 houses: any;
 destiny;
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
markAsBreak(destiny, houseSlug, deal ) {
    if (houseSlug) {
      deal = 'break';
         this._confirmation.create('Are you Sure?', 'U want to break the deal with Homey?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
      this.http.post(this.commonService.base_url + `/house/markAsBreak/${houseSlug}/${destiny}`, { deal })
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/client/rejected-house`]);
          }
          else this.commonService.changeHeaderMessage({ type: 'danger', message });
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
        });
    }
    else {
            console.log('decline button clicked');
          }
        });}
  }
  markAsRecover(destiny, houseSlug, deal ) {
    if (houseSlug) {
      deal = 'approved';
      this.http.post(this.commonService.base_url + `/house/markAsRecover/${houseSlug}/${destiny}`, { deal })
        .subscribe(result => {
          let data = result && result['result'] || {};
          let message = result && result['message'];
          if (data && data.nModified == 1) {
            this.commonService.changeHeaderMessage({ type: 'success', message });
            this.router.navigate([`/client/rejected-house`]);
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

this.destiny = this.userService.currentUser.user._id;
   this.commonService
       .getMineHouse(this.destiny)
       .subscribe((data: any) => {
           this.houses = data;
         
});

  }

}
