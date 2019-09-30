import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import HouseType from '../HouseType';
import { CommonService } from '../common/services/common.service';
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../resolve-emit';

@Component({
  selector: 'app-list-house-type',
  templateUrl: './list-house-type.component.html',
  styleUrls: ['./list-house-type.component.scss']
})
export class ListHouseTypeComponent implements OnInit {

  settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
  houseTypes: HouseType[];

  public searchTxt: any;
  constructor(private commonService: CommonService, private _confirmation: ConfirmationService) { }

  deleteHouseType(id) {
 this._confirmation.create('Are you Sure?', 'U want to delete?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
              this.commonService.deleteHouseType(id).subscribe(res => {
         console.log('House Type Deleted');
});
          } else {
            console.log('decline button clicked');
          }
        });
}

  getFormattedDate(date){
     return moment(date).format("MMMM Do YYYY, h:mm:ss a") || '';
    }

  ngOnInit() {
     this.commonService
         .getHouseType()
         .subscribe((data: HouseType[]) => {
             this.houseTypes = data;
   });  
}
}
