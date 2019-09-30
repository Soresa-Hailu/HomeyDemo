import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
 constructor(private loginService: LoginService,  private route: ActivatedRoute) { }

  ngOnInit() {
this.route.queryParamMap.subscribe((data) => {
     if (data.get('action') === 'logOut') {
        console.log('YOU HAVE BEEN LOGGED OUT SUCCESSFULLY!');}
      });
}

}
