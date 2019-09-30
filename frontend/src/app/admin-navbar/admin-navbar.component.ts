import { Component, OnInit, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../common/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from '../common/services/agent.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class AdminNavbarComponent implements OnInit {

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
  constructor(config: NgbDropdownConfig, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private agentService: AgentService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
     if (data.get('action') === 'logOut') {
        console.log('YOU HAVE BEEN LOGGED OUT SUCCESSFULLY!');}
      });
}
}
