import { Component, OnInit, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../common/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common/services/common.service';
import { HomierService } from '../../common/services/homier.service';

@Component({
  selector: 'app-homier-navbar',
  templateUrl: './homier-navbar.component.html',
  styleUrls: ['./homier-navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class HomierNavbarComponent implements OnInit {
  
  public sidebarOpened = false;
   toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig, private loginService: LoginService, private router: Router, private route: ActivatedRoute
, private commonService: CommonService, private homierService: HomierService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
     if (data.get('action') === 'logOut') {
        console.log('YOU HAVE BEEN LOGGED OUT SUCCESSFULLY!');}
      });
}
}
