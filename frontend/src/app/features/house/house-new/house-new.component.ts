import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../common/services/user.service';
import { CommonService } from '../../../common/services/common.service';

@Component({
  selector: 'app-house-new',
  templateUrl: './house-new.component.html',
  styleUrls: ['./house-new.component.scss']
})
export class HouseNewComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private userService: UserService,
    private http: HttpClient
  ) { }

  houseTypeList = [];
  stateList;
  public cityList = [];
  FetchingCityList = false;
  houseFormData = {
    type: '',
    breadth: 0,
    length: 0
  }

  get plotArea(){
    if(this.houseFormData.length > 0 && this.houseFormData.breadth > 0)
      return this.houseFormData.length * this.houseFormData.breadth;
    return null;
  }

  getHouseTypeList(){
    this.commonService.togglePageLoaderFn(true);
    this.commonService.getHouseTypeList()
      .subscribe(result => {
        // console.log(result);
        this.houseTypeList = result;
        this.commonService.togglePageLoaderFn(false);
      });
  }

  getCityList(stateId){
    this.cityList = [];
    this.FetchingCityList = true;

    if(stateId != 0){
      this.commonService.getCitylistByState(stateId)
      .subscribe(response => {
        if(response.length > 0){
          this.cityList = response;
          this.FetchingCityList = false;
        }
      });
    }
    else{
      this.cityList = [];
    }
  }

  // @Output('changeHeaderMessage') changeHeaderMessage = new EventEmitter();
  //  {
  //   type: '',
  //   message: ''
  // }

  submitForm(data){
    console.log(data);
    data.value.userId = this.userService.currentUser.user._id;
    console.log('userid: ', data.value.userId);

    this.http.post(this.commonService.base_url + '/house/new' , data.value)
    .subscribe(result => {
      console.log(result);
      if(result && result['id']){
        this.commonService.changeHeaderMessage({ type: 'success', message: 'Your House has been listed successfully'  });
      }
    })

  }


  log(data) {
    console.log(data);

  }

  ngOnInit() {
    this.getHouseTypeList();

    this.commonService.getStatelist()
    .subscribe(response => {
      if(response.length > 0){
        this.stateList = response;
      }
      });

  }

}
