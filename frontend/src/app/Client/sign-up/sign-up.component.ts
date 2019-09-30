import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../../common/services/common.service';
import { RegistrationValidators } from '../../common/validators/registration.validators';
import { CustomValidators } from '../../common/validators/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private commonService: CommonService, 
    private registrationValidators: RegistrationValidators,
    private http: HttpClient,
    private router: Router
  ) { }

    registrationForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required], this.registrationValidators.checkEmailAvailability.bind(this.registrationValidators)), 
    phoneNo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    cPassword: new FormControl('', [Validators.required]),
    isTCAccepted: new FormControl('', [Validators.requiredTrue]),
  }, { validators: this.registrationValidators.passwordMatch }
);

  mainErrorMessage = {
    type: '',
    message: ''
  }


  ngOnInit() {
    
  }
  
  

  registration(data) {
    console.log(data);
    // this.router.navigate(['/'],{
    //   queryParams: { action: 'signUpsuccess' }
    // });
    this.http.post(this.commonService.base_url + '/auth/user/register', data.value)
    .subscribe(response => {
      console.log('--- reg form -- ', response); 
      if(response && response['message']){
        this.router.navigate(['/'], {
          queryParams: { action: 'signUpsuccess' }
        });
      }
    },
    (error: Response) => {
      this.mainErrorMessage.type = 'danger';

      if(error.status === 400 ){
        this.mainErrorMessage.message = 'Your request is invalid';
      }
      else if(error.status){
        this.mainErrorMessage.message = 'Something went wrong';
      }
    });
  }

  log(data) {
    // console.log('--',data);
  }

  // --------  Get fields for Form
  get fname() {
    return this.registrationForm.get('fname'); //get the first name
  }
  get lName() {
    return this.registrationForm.get('lName'); //get the last name
  }
  get email() {
    return this.registrationForm.get('email'); //get the email
  }
  get phoneNo() {
    return this.registrationForm.get('phoneNo'); //get the phone number
  }
  get registrationPassword() {
    return this.registrationForm.get('password'); //get the password
  }
  get registrationcPassword() {
    return this.registrationForm.get('cPassword'); //get the confirmation password
  }
  get isTCAccepted() {
    return this.registrationForm.get('isTCAccepted'); //get if the client accept our terms and conditions
}
}
