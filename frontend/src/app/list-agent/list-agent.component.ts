import { Component, OnInit } from '@angular/core';
import Agent from '../Agent';
import { AgentService } from '../common/services/agent.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common/services/common.service';
import { ConfirmationService, ConfirmSettings } from '@jaspero/ng-confirmations';
import { ResolveEmit } from '../resolve-emit';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss']
})
export class ListAgentComponent implements OnInit {
settings: ConfirmSettings | any = {
     overlay: true,
     overlayClickToClose: true,
     showCloseButton: true,
     confirmText: 'Yes',
     declineText: 'No',
  };
  agents: Agent[];

  public searchTxt: any;
  constructor(private modalService: NgbModal,private agentService: AgentService, private router: Router, private _confirmation: ConfirmationService) { }

deleteAgent(id) {
this._confirmation.create('Are you Sure?', 'U want to delete?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
       this.agentService.deleteAgent(id).subscribe(res => {
    console.log('Agent Deleted');
    this.router.navigateByUrl('/admin/add');
});
          } else {
            console.log('decline button clicked');
          }
        });
}

  ngOnInit() {
   this.agentService
       .getAgent()
       .subscribe((data: Agent[]) => {
           this.agents = data;
});
}
}
