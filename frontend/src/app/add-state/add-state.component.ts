import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router, private http: HttpClient ) { }
   createForm = new FormGroup ({
          name: new FormControl('', [Validators.required])
}
);
   mainErrorMessage = {
         type: '',
         message: ''
      }
  ngOnInit() {
    
  }
registration(data) {
  console.log(data);
  this.http.post(this.commonService.base_url + '/common/add/state', data.value)
          .subscribe(response => {
                console.log('-- createForm -- ', response);
                if(response && response['message']) {
                this.mainErrorMessage.type = 'success';
                this.mainErrorMessage.message = 'you have successfully add the state';
                   this.router.navigate(['/admin/addState'], {
                      queryParams: { action: 'CreationSuccess' }});
}},
(error: Response) => {
      this.mainErrorMessage.type = 'danger';
           if(error.status === 400 ) {
               this.mainErrorMessage.message = 'Your request is invalid';
                      }
           else if(error.status) {
              this.mainErrorMessage.message = 'Something Went Wrong';
}});
}

  log(data) {
      console.log(data);
}
// --------- Get the fields of the state Addition form
   get name() {
        return this.createForm.get('name');
}
}
