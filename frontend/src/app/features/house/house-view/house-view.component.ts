import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../common/services/common.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) { }

  houseDetail = {};

  getHouse(houseId) {
    this.commonService.togglePageLoaderFn(true);
    this.commonService.getSingleHouse(houseId)
      .subscribe(result => {
        console.log('housedata: ', result);
        this.houseDetail = result;
      },
      () => { },
      () => {
        this.commonService.togglePageLoaderFn(false);
      }
      );
  }

  ngOnInit() {
    let houseId = this.activatedRoute.snapshot.paramMap.get('houseId');
    if (houseId) this.getHouse(houseId);
  }

}
