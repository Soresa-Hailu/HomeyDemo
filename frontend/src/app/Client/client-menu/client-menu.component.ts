import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../common/services/login.service';
import { UserService } from '../../common/services/user.service';
import { LoginModalComponent } from '../../common/components/login-modal/login-modal.component';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.scss']
})
export class ClientMenuComponent implements OnInit {

  constructor(
 private loginService: LoginService,
    private userService: UserService,
    private modalService: NgbModal,
) { }
  public isCollapsed = true;

  openloginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
  }
  ngOnInit() {
  }

}
