import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-house-type',
  templateUrl: './add-house-type.component.html',
  styleUrls: ['./add-house-type.component.scss']
})
export class AddHouseTypeComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router, private http: HttpClient ) { }
  
  createForm = new FormGroup ({
         title: new FormControl('', [Validators.required]),
         type: new FormControl('', [Validators.required])
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
  this.http.post(this.commonService.base_url + '/common/add/houseType', data.value)
          .subscribe(response => {
                console.log('-- createForm -- ', response);
                if(response && response['message']) {
                this.mainErrorMessage.type = 'success';
                this.mainErrorMessage.message = 'You successfully add the house type';
                   this.router.navigate(['/admin/addHouseType'], {
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
// --------- Get the fields of the house type Addition form
   get title() {
        return this.createForm.get('title');
}
   get type() {
        return this.createForm.get('type');
}
}
