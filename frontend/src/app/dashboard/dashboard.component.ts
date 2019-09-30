import { Component, OnInit } from '@angular/core';
import Agent from '../Agent';
import City from '../City'; 
import HouseType from '../HouseType';
import State from '../State'
import { AgentService } from '../common/services/agent.service';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 agents: Agent[];
 cities: City[];
 houseTypes: HouseType[];
 states: State[];
 users: any;
 rented: any;
 claimed: any;
 sold: any;
 available: any;
 throphies: any;
  constructor(private agentService: AgentService, private commonService: CommonService) { }

  ngOnInit() {
this.agentService
       .getAgent()
       .subscribe((data: Agent[]) => {
           this.agents = data;
 });
this.commonService
      .getRented()
      .subscribe((data: any) => {
          this.rented = data;
});
this.commonService
     .getClaimed()
     .subscribe((data: any) => {
         this.claimed = data;
});
 this.commonService
     .getAvailable()
     .subscribe((data: any) => {
         this.available = data;
});
this.commonService
    .getSold()
    .subscribe((data: any) => {
    this.sold = data;
});
this.commonService
      .getUser()
      .subscribe((data: any) => {
         this.users = data;
});
this.commonService
         .getCity()
         .subscribe((data: City[]) => {
                this.cities = data;
  });
this.commonService
         .getHouseType()
         .subscribe((data: HouseType[]) => {
             this.houseTypes = data;
   }); 
 this.commonService
         .getState()
         .subscribe((data: State[]) => {
                this.states = data;
  });
this.agentService
       .getTopRealtors()
       .subscribe((data: Agent[]) => {
           this.throphies = data;
});
}
}
