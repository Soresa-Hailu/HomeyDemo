import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgentService {
  uri = 'http://localhost:8080/backend';
  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  get currentAgent() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    const jwtHelper = new JwtHelper();
    // console.log('decoded ', jwtHelper.decodeToken(token));

    return jwtHelper.decodeToken(token);
  }

  getcurrentAgentDetails(agentId) {
    return this.http.get(this.commonService.base_url + '/agent/' + agentId);
  }
  getAgent() {
    return this.http.get(`${this.uri}/agent/list` );}
  getTopRealtors() {
    return this.http.get(`${this.uri}/agent/topRealtor`);}
  getAgentRealtor(city) {
   return this.http.get(`${this.uri}/agent/realtorList/${city}`);
  }
  editAgent(id) {
    return this.http.get(`${this.uri}/agent/editAgent/${id}`);}

  updateAgent(fname, lname, email, phoneNo, password, id) {
        const obj = {
           fname: fname,
           lname: lname,
           email: email,
           phoneNo: phoneNo,
           password: password
};
this
 .http
 .post(`${this.uri}/update/${id}`, obj)
 .subscribe(res => console.log('Done Updating'));
         }

  deleteAgent(id) {
    return this.http.get(`${this.uri}/agent/delete/${id}`);}
 
  }

