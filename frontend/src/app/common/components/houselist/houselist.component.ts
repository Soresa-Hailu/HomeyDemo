import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrls: ['./houselist.component.scss']
})
export class HouselistComponent implements OnInit, OnChanges {

  constructor(
    private commonService: CommonService,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) { }

  // @Input('listType') listType: string;
  @Input('blockView') blockView = false;
  @Input('blockSize') blockSize = 12;
  @Input('queryParams') queryParams = '';
  @Input('hideOwnHouse') hideOwnHouse = false;

  houseList = [];

  getHouseList(params:any = ''){
    this.commonService.togglePageLoaderFn(true);
    if(this.hideOwnHouse && this.userService.currentUser && this.userService.currentUser.user._id) params = this.queryParams ? `${params}&notUserId=${this.userService.currentUser.user._id}` : `?notUserId=${this.userService.currentUser.user._id}`;
    console.log('final query ', params);
    this.commonService.filterHouses(params)
      .subscribe((result: any) => {
        if(result) this.houseList = result;               
        console.log('houseList: ', this.houseList);
      }, (err) => console.log({err}),
    () => this.commonService.togglePageLoaderFn(false) );
      
  }

  viewHouse(house_id){
    this.router.navigate([`/users/house/view/${house_id}`]);
  }

  markAsSold(houseId, status){
    if(houseId){
      status = status == 'sell' ? 'sold' : 'acquired';
      this.http.post(this.commonService.base_url + `/house/markAsSold/${houseId}`, {status})
      .subscribe(result => {        
        if(result['result'] && result['result']['ok'] == 1){
          this.commonService.changeHeaderMessage({ type: 'success', message: 'House updated successfully'  });
          this.router.navigate([`/users/house/listing/sold`]);
        }
      });
    }
  }

  getFormattedDate(date){
    return moment(date).format("MMMM Do YYYY, h:mm:ss a") || '';
  }

  ngOnInit() {
    // console.log('ngOnInit');
    // this.getHouseList(this.queryParams);
  }
  
  ngOnChanges() {
    this.getHouseList(this.queryParams);
  }

}
