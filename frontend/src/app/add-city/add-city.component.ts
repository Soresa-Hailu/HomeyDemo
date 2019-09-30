import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router, private http: HttpClient ) { }

createForm = new FormGroup ({
     name: new FormControl('', [Validators.required]),
     state: new FormControl('', [Validators.required])
});
stateList;
private cityList =[];
 
mainErrorMessage = {
    type: '',
    message: ''
}
  ngOnInit() {
     this.commonService.getStatelist()
        .subscribe(response => {
           if(response.length > 0) {
                this.stateList = response;
  }
});
}
registration(data) {
 console.log(data);
 this.http.post(this.commonService.base_url + '/common/add/city', data.value)
         .subscribe(response => {
              console.log('-- create form -- ', response);
              if(response && response['message']){
              this.mainErrorMessage.type = 'success';
              this.mainErrorMessage.message = 'You have successfully add the city';
                this.router.navigate(['/admin/addCity'], {
                        queryParams: { action: 'CreationSuccess' }});
}},
(error: Response) => {
     this.mainErrorMessage.type = 'danger';
         if(error.status === 400 ){
              this.mainErrorMessage.message = 'Your request is invalide';
            }     
         else if(error.status){
              this.mainErrorMessage.message = 'Something Went Wrong';
}});
}
  getCityList(stateId) {
    this.cityList = [];

    if (stateId !== 0) {
      this.commonService.getCitylistByState(stateId)
      .subscribe(response => {
        if (response.length > 0) {
          this.cityList = response;
        }
      });
    }
    else {
      this.cityList = [];
    }
  }

  log(data) {
    console.log(data);

  }

// --------- Get the fields of the city addition form
get name() {
      return this.createForm.get('name');
}
get state() {
      return this.createForm.get('state');
}
}
