import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgentService } from '../common/services/agent.service';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationValidators } from '../common/validators/registration.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private agentService: AgentService,
    private router: Router,
    private registrationValidators: RegistrationValidators,
    private http: HttpClient
  ) { }
  currentRate=10;
  createForm = new FormGroup ({
    fname: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required], this.registrationValidators.checkAgentEmailAvailability.bind(this.registrationValidators)),
    phoneNo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    agentType: new FormControl('', [Validators.required]),
    rating: new FormControl('')
 }
);
  stateList;
  private cityList = [];
  FetchingCityList = false;
 mainErrorMessage = {
    type: '',
    message: ''
  }
 ngOnInit() {

  this.commonService.getStatelist()
  .subscribe(response => {
    if (response.length > 0) {
      this.stateList = response;
    }
    });
}
sendEmail(dangeorus){
  dangeorus='this is dangerous minds cannot change the whole things';
  this.http.post(`${this.commonService.base_url}/common/sendemail`, {dangeorus})
          .subscribe(res => {
          
          
          })
}


registration(data) {
 console.log(data);
 this.http.post(this.commonService.base_url + '/auth/agent/register', data.value)
         .subscribe(response => {
              console.log('-- create form -- ', response);
              if(response && response['message']){
              this.mainErrorMessage.type = 'success';
              this.mainErrorMessage.message = 'You Successfully add the staff member of homey';
                this.router.navigate(['/admin/add'], {
                        queryParams: { action: 'CreationSuccess' }
                        
                        });
}},
(error: Response) => {
     this.mainErrorMessage.type = 'danger';
         if(error.status === 400 ){
              this.mainErrorMessage.message = 'Your request is invalid';
            }     
         else if(error.status){
              this.mainErrorMessage.message = 'Something Went Wrong';
}});
}
  getCityList(stateId) {
    this.cityList = [];
    this.FetchingCityList = true;

    if (stateId !== 0) {
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

  // @Output('changeHeaderMessage') changeHeaderMessage = new EventEmitter();
  //  {
  //   type: '',
  //   message: ''
  // }



  log(data) {
    console.log(data);

  }

// --------- Get the fields of the staff registration form
get fname() {
   return this.createForm.get('fname');
}
get lName() {
   return this.createForm.get('lName');
}
get email() {
   return this.createForm.get('email');
}
get phoneNo() {
   return this.createForm.get('phoneNo');
}
get password() {
   return this.createForm.get('password');
}
get agentType() {
   return this.createForm.get('agentType');
}
get state() {
   return this.createForm.get('state');
}
get city() {
   return this.createForm.get('city');
}
}
