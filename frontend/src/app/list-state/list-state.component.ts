import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';
import * as moment from 'moment';
import State from '../State'; 
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../resolve-emit';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.scss']
})
export class ListStateComponent implements OnInit {
  settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
  states: State[];
  searchTerm: String;
  public searchTxt: any;
  constructor(private commonService: CommonService, private _confirmation: ConfirmationService) { }

  deleteState(id) {
   this._confirmation.create('Are you Sure?', 'U want to delete?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
          this.commonService.deleteState(id).subscribe(res => {
           console.log('State Deleted');
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
         .getState()
         .subscribe((data: State[]) => {
                this.states = data;
  });
}
}
