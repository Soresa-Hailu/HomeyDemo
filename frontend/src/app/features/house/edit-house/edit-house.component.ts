import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../../common/services/common.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private location: Location
  ) { }

  houseDetail: any = {
    type: {},
    state: {},
    city: {}
  };
  stateList;
  private cityList = [];
  FetchingCityList = false;
  houseTypeList;
  newHouseData: any = {};

  getHouse(houseId) {
    this.commonService.getSingleHouse(houseId)
      .subscribe(result => {
        console.log('housedata: ', result);
        this.houseDetail = result;
      });
  }

  getCityList(stateId) {
    this.cityList = [];
    this.FetchingCityList = true;

    if (stateId != 0) {
      this.commonService.getCitylistByState(stateId)
      .subscribe(response => {
        if (response.length > 0) {
          this.cityList = response;
          this.FetchingCityList = false;
        }
      });
    }
    else {
      this.cityList = [];
    }
  }

  submitForm(data) {
    console.log('submitForm: ', data);
  }

  locationBack() {
    this.location.back();
  }

  ngOnInit() {
    const houseId = this.activatedRoute.snapshot.paramMap.get('houseId');
    // console.log('propertyId: ', propertyId);

    if (houseId) {
      this.getHouse(houseId); }
    else {
      console.log('not found'); }

    this.commonService.getStatelist()
    .subscribe(response => {
      if (response.length > 0) {
        this.stateList = response;
      }
      });

    this.commonService.getHouseTypeList()
    .subscribe(result => this.houseTypeList = result );
  }

}
