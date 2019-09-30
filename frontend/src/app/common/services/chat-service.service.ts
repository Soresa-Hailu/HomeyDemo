import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor( private http: HttpClient) { }
  getChatByRoom(room) {
    return new Promise((resolve, reject) => {
      this.http.get('/chat/' + room)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

 

  saveChat(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/chatter', data)
          .map(res => res)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
