import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { LoginService } from '../../common/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit, OnChanges {

   constructor(
    private commonService: CommonService,
    private router: Router,
    private loginService: LoginService,
    private http: HttpClient
  ) { }
  
  @Input('queryParams') queryParams = '';
  houseList = [];


 getHouseList(params: any = '') {
    this.commonService.togglePageLoaderFn(true);
    console.log('final query ', params);
    this.commonService.filterHouses(params)
      .subscribe((result: any) => {
        if (result) this.houseList = result;
        console.log('houseList: ', this.houseList);
      }, (err) => console.log({ err }),
        () => this.commonService.togglePageLoaderFn(false));

  }
  getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
    likedByUsers(_id, id){
    this.http.put(`${this.commonService.base_url}/house/likedByUsers`, {_id, id })
    .subscribe(res => {
      console.log({res});
    })
  }
 ngOnInit() {
    // console.log('ngOnInit');
    // this.getHouseList(this.queryParams);
  }
 ngOnChanges() {
    this.getHouseList(this.queryParams);
  }

}
