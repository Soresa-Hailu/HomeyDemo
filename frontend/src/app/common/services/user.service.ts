import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  uri = 'http://localhost:8080/backend';
  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  get currentUser(){
    var token = localStorage.getItem('token');
    if(!token) return null;
    
    let jwtHelper = new JwtHelper();
    // console.log('decoded ', jwtHelper.decodeToken(token));
    
    return jwtHelper.decodeToken(token);
  }

updateProfile(userId, fname, lname) {
        const obj = {
           fname: fname,
           lname: lname
};
this
 .http
 .post(`${this.uri}/updateProfile/${userId}`, obj)
 .subscribe(res => console.log('Done Updating'));
         }
  getcurrentUserDetails(userId){
    return this.http.get(`${this.uri}/user/${userId}`);
  }
    editUser(id) {
    return this.http.get(`${this.uri}/user/editUser/${id}`);
}
getUser() {
    return this.http.get(`${this.uri}/user/list` );}
}
