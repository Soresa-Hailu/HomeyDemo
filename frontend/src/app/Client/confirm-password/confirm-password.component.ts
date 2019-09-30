import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  constructor(
      private commonService: CommonService,
      private http: HttpClient,
      private userService: UserService
  ) { }
  mainErrorMessage = {
     type: '',
     message: ''
  }
  ConfirmPassword(_id, confirmed){
    if(confirmed=='ydsseyhmoodpa')
    {
      this.http.put(`${this.commonService.base_url}/auth/user/ConfirmPassword`, {_id, confirmed})
       .subscribe(res => {
           this.mainErrorMessage.type = 'success';
           this.mainErrorMessage.message = 'you have successfully confirmed your identity';
    })
    }
    }
  
  ngOnInit() {
  }

}
