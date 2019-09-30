import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';

@Component({
  selector: 'app-homier-password',
  templateUrl: './homier-password.component.html',
  styleUrls: ['./homier-password.component.scss']
})
export class HomierPasswordComponent implements OnInit {

 constructor(
    private commonService: CommonService,
    private http: HttpClient,
    private homierService: HomierService
  ) { }
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
