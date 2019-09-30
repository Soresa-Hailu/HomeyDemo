import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import City from '../City'; 
import { CommonService } from '../common/services/common.service';
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../resolve-emit';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit {
  
 
  settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
   cities: City[];
   public searchTxt: any;
  constructor(private commonService: CommonService, private _confirmation: ConfirmationService) { }

  deleteCity(id) {
   this._confirmation.create('Are you Sure?', 'U want to delete?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
          this.commonService.deleteCity(id).subscribe(res => {
           console.log('City Deleted');
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
         .getCity()
         .subscribe((data: City[]) => {
                this.cities = data;
  });
}
}
