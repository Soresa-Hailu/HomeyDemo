import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { AgentService } from '../common/services/agent.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rate-the-agent',
  templateUrl: './rate-the-agent.component.html',
  styleUrls: ['./rate-the-agent.component.scss']
})
export class RateTheAgentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private commonService: CommonService,
    private agentService: AgentService,
    private http: HttpClient
  ) { }
   currentRate=0;
   eski;
   yiwatalin;
   mainErrorMessage = {
    type: '',
    message: ''
  }

 rateAgent(rating, dangerous){
    dangerous = this.yiwatalin;
    this.http.put(`${this.commonService.base_url}/agent/rateAgent`, {dangerous,rating})
    .subscribe(res => {
    this.mainErrorMessage.type = 'success';
    this.mainErrorMessage.message = 'You rated successfully';
      console.log({res});
    })

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.yiwatalin = params['id'];
  });
  }

}
