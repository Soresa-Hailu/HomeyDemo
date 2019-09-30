import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { CommonService } from '../../common/services/common.service';
import * as moment from 'moment';
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../../resolve-emit';

@Component({
  selector: 'app-rejected-house',
  templateUrl: './rejected-house.component.html',
  styleUrls: ['./rejected-house.component.scss']
})
export class RejectedHouseComponent implements OnInit {
  settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
  constructor(private userService: UserService, private commonService: CommonService,  private _confirmation: ConfirmationService) { }
 houses: any;
 destiny;
deleteClientHouse(id) {
     this._confirmation.create('Are you Sure?', 'U want to delete?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
          this.commonService.deleteClientHouse(id).subscribe(res => {
           console.log('client house Deleted');
           });
          } else {
            console.log('decline button clicked');
          }
        });
}
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }

  ngOnInit() {

this.destiny = this.userService.currentUser.user._id;
   this.commonService
       .getRejectedHouse(this.destiny)
       .subscribe((data: any) => {
           this.houses = data;
         
});

  }

}
  
