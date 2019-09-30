import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../common/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common/services/common.service';
import { RealtorService } from '../../common/services/realtor.service';

@Component({
  selector: 'app-realtor-sidebar',
  templateUrl: './realtor-sidebar.component.html',
  styleUrls: ['./realtor-sidebar.component.scss']
})
export class RealtorSidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  alem;
  requests;
  constructor(private loginService: LoginService,  private route: ActivatedRoute, private commonService: CommonService, private realtorService: RealtorService) { }
  
  ngOnInit() {
this.route.queryParamMap.subscribe((data) => {
     if (data.get('action') === 'logOut') {
        console.log('YOU HAVE BEEN LOGGED OUT SUCCESSFULLY!');}
      });
      this.alem = this.realtorService.currentRealtor.agent._id;
        this.commonService
       .getHouseRequests(this.alem)
       .subscribe((data: any) => {
           this.requests = data;
         
}); 
}

}
