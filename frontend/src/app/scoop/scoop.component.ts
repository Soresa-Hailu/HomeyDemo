import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-scoop',
  templateUrl: './scoop.component.html',
  styleUrls: ['./scoop.component.scss']
})
export class ScoopComponent implements OnInit {

  constructor(    
    private commonService: CommonService,
    private http: HttpClient,
    private router: Router) { }
  imgUrls = [];
  imgsToUpload = [];

submitForm(data) {
    const imageData = new FormData();
    this.imgsToUpload.forEach((ele, index) => {
      imageData.append("propImages", ele, ele['name']);
    })
    for (let key in data.value) {
      // iterate and set other form data
      imageData.append(key, data.value[key])
    }
    this.http.post(this.commonService.base_url + '/common/newScoop', imageData)
      .subscribe(result => {
        console.log({ result });
        let data = result && result['result'] || {};
        let message = result && result['message'] || '';
        if(data){
          this.commonService.changeHeaderMessage({ type: 'success', message });
          this.router.navigate([`/admin/dashboard`])
        }
        else this.commonService.changeHeaderMessage({ type: 'danger', message: 'Something Went Wrong' });
      }, err => {
        let errmessage = err.error && err.error.message || '';
        console.log({err}, errmessage);
        this.commonService.changeHeaderMessage({ type: 'danger', message: errmessage });
      })
  }

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
  }

}
