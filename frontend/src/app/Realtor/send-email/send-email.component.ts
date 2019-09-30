import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  requesthouses: any = {};
  sendEmail(anotherdata,data) {
    this.http.post(`${this.commonService.base_url}/common/sendemail`, {anotherdata, data} )
          .subscribe(res => {
          
          })
  }
  
  
  ngOnInit() {
  this.route.params.subscribe(params => {
     this.commonService.getClientRequestHouses(params['id']).subscribe(res => {
         this.requesthouses=res;
});
});
}
}
