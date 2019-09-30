import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgentService } from '../common/services/agent.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent implements OnInit {

  
  angForm: FormGroup;
  agent: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private agentService: AgentService, private fb: FormBuilder) {
    this.editForm();
}

editForm() {
  this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email: ['', Validators.required ],
      phoneNo: ['', Validators.required ],
      password: ['', Validators.required ],
      state: ['', Validators.required ],
      city: ['', Validators.required ]
});
}

ngOnInit() {
   this.route.params.subscribe(params => {
     this.agentService.editAgent(params['id']).subscribe(res => {
         this.agent=res;
});
});
}
updateAgent(fname, lname, email, phoneNo, password) {
     this.route.params.subscribe(params => {
       this.agentService.updateAgent(fname, lname, email, phoneNo,         password, params['id']);
       this.router.navigate(['list']);
});       
}
}
