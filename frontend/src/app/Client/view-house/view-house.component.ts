import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonService } from '../../common/services/common.service';
import { HttpClient } from '@angular/common/http';
import { AgentService } from '../../common/services/agent.service';
import { LoginService } from '../../common/services/login.service';
import { UserService } from '../../common/services/user.service';
import Agent from '../../Agent';
import { RateModalComponent } from '../../common/components/rate-modal/rate-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.scss']
})
export class ViewHouseComponent implements OnInit {
  agents: Agent[];
  houses : any = {};
  related: any;
  latitude = 8.9874681;
  longitude = 38.791429;
mainErrorMessage = {
    type: '',
    message: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService, private agentService: AgentService, private loginService: LoginService,   private _http: HttpClient, private userService: UserService, private modalService: NgbModal) { }
 opentipModal() {
   const modalRef = this.modalService.open(RateModalComponent);
 }
 getFormattedDate(date) {
    return moment(date).format("MMMM Do YYYY") || '';
  }
  requestHouse(house_id,user_id, agent_id,destiny){
           destiny='dangerous'
          this._http.post(this.commonService.base_url + `/house/requestHouse/${house_id}/${user_id}/${agent_id}`, {destiny})
               .subscribe(response => {
          if (response && response ['message']) {
           this.mainErrorMessage.type = 'success'
           this.mainErrorMessage.message = 'You required an agent successfully keep relax and wait a call or check your email';
          }
          else this.mainErrorMessage.type = 'danger';
        }, err => {
          let error = err.error;
          let message = err.error && err.error['message'];
          this.commonService.changeHeaderMessage({ type: 'danger', message });
          this.mainErrorMessage.message = 'Sorry, your request is not valid at this time try again later!';
        });
    }
              
 likedByUsers(_id, id){
    this._http.put(`${this.commonService.base_url}/house/likedByUsers`, {_id, id })
    .subscribe(res => {
      console.log({res});
    })
  }
  ngOnInit() {
this.route.params.subscribe(params => {
     this.commonService.viewHouse(params['id']).subscribe(res => {
         this.houses = res;       
});
console.log(this.houses._id);
 this.agentService
       .getAgentRealtor(params['city'])
       .subscribe((data: Agent[]) => {
           this.agents = data;
});
     this.commonService
                 .getRelatedHouse(params['city'])
                 .subscribe(dange => {
           this.related = dange;
});
});

  }

}
