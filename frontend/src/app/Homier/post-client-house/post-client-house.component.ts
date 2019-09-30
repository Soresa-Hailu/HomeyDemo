import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-client-house',
  templateUrl: './post-client-house.component.html',
  styleUrls: ['./post-client-house.component.scss']
})
export class PostClientHouseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private commonService: CommonService,
    private homierService: HomierService,
    private http: HttpClient
  ) { }


    houseTypeList = [];
  stateList: any[];
  private cityList = [];
  FetchingCityList = false;
  imgUrls = [];
  imgsToUpload = [];
  clienthouses: any = {};

  getHouseTypeList() {
    this.commonService.togglePageLoaderFn(true);
    this.commonService.getHouseTypeList()
      .subscribe(result => {
        // console.log(result);
        this.houseTypeList = result;
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
    data.value.agentId = this.homierService.currentHomier.agent._id;
     if(data.value.age <= 5 && data.value.currentSituation == 'New' && data.value.numberOfShop >=3 && data.value.numberOfHospitals >=1 && data.value.numberOfSchools >=2 && data.value.policeStations >=1 && data.value.safe == 'safe')
    {
      data.value.rating = 10;
    }
    else if( data.value.numberOfHospitals >=1 && data.value.numberOfSchools >=1 && data.value.numberOfShop >=2 && data.value.policeStations >=1 && (data.value.currentSituation =='New' || data.value.currentSituation == 'Fair'))
    {
      data.value.rating = 9;
    }
    else if(data.value.safe == 'unsafe' && data.value.currentSituation == 'Severe')
    {
      data.value.rating = 4;
    }
    else 
    {
      data.value.rating = 7;
    }
    const imageData = new FormData();
    this.imgsToUpload.forEach((ele, index) => {
      imageData.append("propImages", ele, ele['name']);
    })
    for (let key in data.value) {
      // iterate and set other form data
      imageData.append(key, data.value[key])
    }
    this.http.post(this.commonService.base_url + '/house/new', imageData)
      .subscribe(result => {
        console.log({ result });
        let data = result && result['result'] || {};
        let message = result && result['message'] || '';
        if(data && data['slug']){
          this.commonService.changeHeaderMessage({ type: 'success', message });
          this.router.navigate([`/homier`])
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
    if (fileList && (fileList.length<11)) {
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
this.route.params.subscribe(params => {
     this.commonService.getClientHouses(params['id']).subscribe(res => {
         this.clienthouses=res;
});
});
    this.commonService.getStatelist()
      .subscribe(response => {
        if (response.length > 0) {
          this.stateList = response;
        }
      });

  }

}
