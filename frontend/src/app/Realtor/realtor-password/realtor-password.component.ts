import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';

@Component({
  selector: 'app-realtor-password',
  templateUrl: './realtor-password.component.html',
  styleUrls: ['./realtor-password.component.scss']
})
export class RealtorPasswordComponent implements OnInit {

  constructor(private commonService: CommonService, private realtorService: RealtorService, private http: HttpClient) { }
 mainErrorMessage = {
    type: '',
    message: ''
  }
  changePass(_id, password){
    console.log('zx, dsf ', _id, password);
    this.http.put(`${this.commonService.base_url}/auth/agent/changePassword`, {_id, password })
    .subscribe(res => {
    this.mainErrorMessage.type = 'success';
      this.mainErrorMessage.message = 'You successfully changed your password';
      console.log({res});
    })
  }

  ngOnInit() {
  }

}
