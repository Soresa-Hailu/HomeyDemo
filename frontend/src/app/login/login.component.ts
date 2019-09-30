import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) { }
  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
});
  alertMessage: any = {
    // status: false,
    type: '',
    message: ''
  };
  urltoRedirect = '';
  loginCheck = false;

  login(loginForm) {
    console.log('loginform ', loginForm);
    this.loginCheck = true;
    let returnData = this.loginService.checkAgentLogin(loginForm.value)
    .subscribe(response => {
      console.log('== response - ', response, ' type of ', response['token']);

      if (response['token'] !== '') {
        this.alertMessage = {
          type: 'success',
          status: true,
          message: 'Logged In successfully'
        }
        this.loginCheck = false;
        this.alertMessage.message = '';
        this.loginSuccess(response['token']);
      }
    },
    (error: Response) => {
      this.alertMessage.type = 'danger';
      this.loginCheck = false;
      console.log('Unexpected error occured ', error);
      if (error.status === 401) {
        this.alertMessage.message = "Either of you details is incorrect";
      }
      else {
        this.alertMessage.message = "An Unexpected error occured";
      }
      // this.loginError.status = true;
    });
  }

  loginSuccess(token) {
    this.commonService.changeHeaderMessage({ type: 'success', message: 'You have logged in successfully'});
   this.router.navigate([this.urltoRedirect || '/admin/dashboard']);

    // Adding to local storage
    localStorage.setItem('token', token);

  }


  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      // console.log('--- ', data);
      if (data.get('action') === 'signUpsuccess') 
        this.alertMessage = { status: true, type: 'success', message: 'Please login to continue' }
      else if (data.get('action') === 'login') 
        this.alertMessage = { status: true, type: 'success', message: 'Please login to continue' }

      if (data.get('urltoRedirect') != '')
        this.urltoRedirect = data.get('urltoRedirect');      
    });      
  }
 get email() {
    return this.loginForm.get('email');
 }
 get password() {
    return this.loginForm.get('password');
 }
 get agentType() {
    return this.loginForm.get('agentType');
 }
}
