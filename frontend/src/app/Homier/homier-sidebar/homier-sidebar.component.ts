import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../common/services/login.service';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homier-sidebar',
  templateUrl: './homier-sidebar.component.html',
  styleUrls: ['./homier-sidebar.component.scss']
})
export class HomierSidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  constructor(private loginService: LoginService,  private route: ActivatedRoute, private commonService: CommonService,
    private homierService: HomierService) { }
houses: any;
alem;  
accepts: any;
ngOnInit() {
this.alem = this.homierService.currentHomier.agent.city;
   this.commonService
       .getResumedHouse(this.alem)
       .subscribe((data: any) => {
           this.houses = data;
         
});
   this.commonService
       .getPostedHouse(this.alem)
       .subscribe((data: any) => {
           this.accepts = data;
         
});          
this.route.queryParamMap.subscribe((data) => {
     if (data.get('action') === 'logOut') {
        console.log('YOU HAVE BEEN LOGGED OUT SUCCESSFULLY!');}
      });
}

}
