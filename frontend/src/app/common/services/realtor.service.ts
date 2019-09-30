import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RealtorService {

  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  get currentRealtor(){
    var token = localStorage.getItem('token');
    if(!token) return null;
    
    let jwtHelper = new JwtHelper();
    // console.log('decoded ', jwtHelper.decodeToken(token));
    
    return jwtHelper.decodeToken(token);
  }

  getcurrentRealtorDetails(realtorId){
    return this.http.get(this.commonService.base_url + '/agent/' + realtorId);
  }

}
