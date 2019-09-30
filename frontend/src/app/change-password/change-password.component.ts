import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { AgentService } from '../common/services/agent.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private http: HttpClient, private commonService: CommonService, private agentService: AgentService) { }
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
