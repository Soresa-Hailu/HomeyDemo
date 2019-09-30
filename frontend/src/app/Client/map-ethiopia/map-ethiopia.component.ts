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
  selector: 'app-map-ethiopia',
  templateUrl: './map-ethiopia.component.html',
  styleUrls: ['./map-ethiopia.component.scss']
})
export class MapEthiopiaComponent implements OnInit {

   houses: any;
 cityList = [];
  houseTypeList;
  negeles: any;
  searchHouData = { houseFor: 'sell' };
  constructor(
    private commonService: CommonService,
    private loginService: LoginService, // used in template
    private userService: UserService,
    private router: Router,
    private _http: HttpClient
  ) { }

 search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? [] : this.cityList.map(v => { return (v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)? v.name : ''
      }).filter(a => a).slice(0, 10) );

 getFormattedDate(date) {
    return moment(date, "YYYYMMDD").fromNow() || '';
  }
  ngOnInit() {
this.commonService.getCitylist()
      .subscribe(response => {
        this.cityList = response;
        // response.forEach(element => {
        //   this.cityList.push(element.name);
        // });
      });

    this.commonService.getHouseTypeList()
      .subscribe(response => {
        this.houseTypeList = response;
      });
   this.commonService
       .getHouse()
       .subscribe((data: any) => {
           this.houses = data;
         
});
}
 searchHou(value) {
    value.houseFor = this.searchHouData.houseFor;

    var queryParamsTemp: any = {
      houseFor: value.houseFor,
      type: value.type
    };
    
    queryParamsTemp.city = this.cityList.map(e => { 
      return e.name == value.city ? e._id : ''
     }).filter(ele => ele);

    this.router.navigate(['/find-house'], {
      queryParams: queryParamsTemp //{ 'city': value.city, 'houseFor': value.houseFor, 'type': value.type }
    })
  }
}
