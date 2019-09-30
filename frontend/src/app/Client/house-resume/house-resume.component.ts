import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { UserService } from '../../common/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-house-resume',
  templateUrl: './house-resume.component.html',
  styleUrls: ['./house-resume.component.scss']
})
export class HouseResumeComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) { }

houseTypeList = [];
  stateList: any[];
  private cityList = [];
  FetchingCityList = false;
  imgUrls = [];
  houses: any;
  imgsToUpload = [];

  getHouseTypeList() {
    this.commonService.togglePageLoaderFn(true);
    this.commonService.getHouseTypeList()
      .subscribe(result => {
        // console.log(result);
        this.houseTypeList = result;
        this.commonService.togglePageLoaderFn(false);
      });
  }
getHouse() {
this.commonService.togglePageLoaderFn(true);
 this.commonService
       .getHouse()
       .subscribe((data: any) => {
           this.houses = data;
         this.commonService.togglePageLoaderFn(false);
});
}
  getCityList(stateId) {
    this.cityList = [];
    this.FetchingCityList = true;

    if (stateId) {
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
    console.log({ data });
    data.value.userId = this.userService.currentUser.user._id;
    const imageData = new FormData();
    this.imgsToUpload.forEach((ele, index) => {
      imageData.append("propImages", ele, ele['name']);
    })
    for (let key in data.value) {
      // iterate and set other form data
      imageData.append(key, data.value[key])
    }
    this.http.post(this.commonService.base_url + '/house/newResume', imageData)
      .subscribe(result => {
        console.log({ result });
        let data = result && result['result'] || {};
        let message = result && result['message'] || '';
        if(data && data['slug']){
          this.commonService.changeHeaderMessage({ type: 'success', message });
          this.router.navigate([`/client`])
        }
        else this.commonService.changeHeaderMessage({ type: 'danger', message: 'Something Went Wrong' });
      }, err => {
        let errmessage = err.error && err.error.message || '';
        console.log({err}, errmessage);
        this.commonService.changeHeaderMessage({ type: 'danger', message: errmessage });
      })
  }

  log(data) { console.log(data); }

  filesChange(fieldName: string, fileList) {
    if (fileList && fileList.length) {
      this.imgsToUpload = Object.values(fileList);
      let i = 0;
      Object.values(fileList).forEach(f => {
        let reader = new FileReader();
        reader.readAsDataURL(fileList[i]);
        let name = fileList[i].name;
        reader.onload = (_event) => {
          this.imgUrls.push({ name, path: reader.result });
        }
        i++;
      })
    }
    console.log('this.imgUrls', this.imgUrls, this.imgsToUpload);
  }

  removeSinglePic(img) {
    this.imgUrls = this.imgUrls.filter(e => img != e);
  }

  getDataTitleViaId(id, dataList, keyName) {
    if (!id || !dataList || !keyName) return '';

    let data = this[dataList].filter(e => e._id == id);
    return data.length && data[0][keyName] || '';
  }

  ngOnInit() {
    this.getHouseTypeList();
    this.getHouse();
    this.commonService.getStatelist()
      .subscribe(response => {
        if (response.length > 0) {
          this.stateList = response;
        }
      });
  
  }

}
