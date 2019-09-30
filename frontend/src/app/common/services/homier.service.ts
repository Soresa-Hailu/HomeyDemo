import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomierService {
 uri = 'http://localhost:8080/backend';
  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  get currentHomier(){
    var token = localStorage.getItem('token');
    if(!token) return null;
    
    let jwtHelper = new JwtHelper();
    // console.log('decoded ', jwtHelper.decodeToken(token));
    
    return jwtHelper.decodeToken(token);
  }
  getcurrentHomierDetails(homierId){
    return this.http.get(`${this.uri}/agent/${homierId}`);
  }

}
