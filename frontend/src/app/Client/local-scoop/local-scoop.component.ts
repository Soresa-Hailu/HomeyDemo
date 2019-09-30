import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { LoginService } from '../../common/services/login.service';
import { UserService } from '../../common/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-local-scoop',
  templateUrl: './local-scoop.component.html',
  styleUrls: ['./local-scoop.component.scss']
})
export class LocalScoopComponent implements OnInit {
  scoops: any;

  constructor(  
    private commonService: CommonService,
    private loginService: LoginService, // used in template
    private userService: UserService,
    private router: Router,
    private _http: HttpClient
             ) { }
 getFormattedDate(date) {
    return moment(date, "YYYYMMDD").fromNow() || '';
  }
   ngOnInit(){
this.commonService
       .getScoops()
       .subscribe((data: any) => {
           this.scoops = data;
         
});
}
}
