import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonService } from '../../common/services/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-resumed-house',
  templateUrl: './view-resumed-house.component.html',
  styleUrls: ['./view-resumed-house.component.scss']
})
export class ViewResumedHouseComponent implements OnInit {
  houses: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
this.route.params.subscribe(params => {
     this.commonService.viewResumedHouse(params['id']).subscribe(res => {
         this.houses = res;       
});
});
  }

}
