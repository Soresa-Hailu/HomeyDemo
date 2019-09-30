import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {

  constructor(
    private http: HttpClient,
    private titleService: Title
  ) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  // Header alert text
  HeaderMessage = new Subject<string>();
  HeaderMessage$ = this.HeaderMessage.asObservable();

  changeHeaderMessage(data) {
    this.HeaderMessage.next(data);
  }
  // Header alert text

  togglePageLoader = new Subject<boolean>();
  togglePageLoader$ = this.togglePageLoader.asObservable();
  togglePageLoaderFn(data: boolean = false){
    this.togglePageLoader.next(data);
  }

  // showLoader() { this.togglePageLoader.next(true); }
  // hideLoader() { this.togglePageLoader.next(false); }

  main_url = 'http://localhost:8080';
  base_url = 'http://localhost:8080/backend';
  image_url = 'http://localhost:8080/uploads';

 viewHouse(id) {
    return this.http.get(`${this.base_url}/house/viewHouse/${id}`);
  }
 viewResumedHouse(id) {
   return this.http.get(`${this.base_url}/house/viewResumedHouse/${id}`);
}

  getStatelist(): Observable<any>{
    return this.http.get(this.base_url+ '/common/state');
  }
  getState() {
    return this.http.get(`${this.base_url}/common/getState`);
    }
  getUser() {
    return this.http.get(`${this.base_url}/common/getUser`);
 }
  getHouse() {
    return this.http.get(`${this.base_url}/house/getHouse`);
    }
  getScoops() {
    return this.http.get(`${this.base_url}/common/getScoops`);
}
  getRented() {
    return this.http.get(`${this.base_url}/house/getRented`);
}
 getAvailable() {
    return this.http.get(`${this.base_url}/house/getAvailable`);
}
 getSold() {
    return this.http.get(`${this.base_url}/house/getSold`);
}
 getClaimed() {
    return this.http.get(`${this.base_url}/house/getClaimed`);
}
  getResumedHouse(city) {
    return this.http.get(`${this.base_url}/house/getResumedHouse/${city}`);
    }
    getPostedByMe(id) {
     return this.http.get(`${this.base_url}/house/getPostedByMe/${id}`);
    }
  getPostedHouse(city) {
    return this.http.get(`${this.base_url}/house/getPostedHouse/${city}`);
}  
   getBreakedHouse(city) {
      return this.http.get(`${this.base_url}/house/getBreakedHouse/${city}`);
   }
getMineHouse(id) {
    return this.http.get(`${this.base_url}/house/getMineHouse/${id}`);
}
  getAcceptedHouse(id) {
    return this.http.get(`${this.base_url}/house/getAcceptedHouse/${id}`);
    } 
  getRejectedHouse(id) {
    return this.http.get(`${this.base_url}/house/getRejectedHouse/${id}`);
    } 
  getHouseForSell(city) {
    return this.http.get(`${this.base_url}/house/getHouseForSell/${city}`);
    } 
  getHouseRequests(id) {
    return this.http.get(`${this.base_url}/house/getHouseRequests/${id}`);
  }
   getHouseForClaim(city) {
    return this.http.get(`${this.base_url}/house/getHouseForClaim/${city}`);
    } 
  getSoldHouse(city) {
    return this.http.get(`${this.base_url}/house/getSoldHouse/${city}`);
    }  
  getRentedHouse(city) {
    return this.http.get(`${this.base_url}/house/getRentedHouse/${city}`);
    }  
   getRelatedHouse(city){
    return this.http.get(`${this.base_url}/house/getRelatedHouse/${city}`);
}
   getLikeByMe(id) {
    return this.http.get(`${this.base_url}/house/getLikeByMe/${id}`);
   }
  getCitylist(): Observable<any>{
    return this.http.get(this.base_url+ '/common/cities');
  }
  getClientHouses(id) {
    return this.http.get(`${this.base_url}/house/getClientHouses/${id}`);}
  deleteState(id) {
    return this.http.get(`${this.base_url}/common/deleteState/${id}`);
  }
  getCitylistByState(stateId): Observable<any>{
    return this.http.get(this.base_url+ '/common/cities/'+stateId );
  }
  getCity() {
    return this.http.get(`${this.base_url}/common/getCity`); 
  }
  getHouseType() {
    return this.http.get(`${this.base_url}/common/getHouseType`);
  }
  deleteCity(id) {
   return this.http.get(`${this.base_url}/common/deleteCity/${id}`);
  }
  deleteHouseType(id) {
   return this.http.get(`${this.base_url}/common/deleteHouseType/${id}`);
 }
 deleteClientHouse(id) {
   return this.http.get(`${this.base_url}/house/deleteClientHouse/${id}`);
}
  getInMyArea(city) {
   return this.http.get(`${this.base_url}/house/getInMyArea/${city}`);
}

getClientRequestHouses(id){
   return this.http.get(`${this.base_url}/house/getClientRequestHouses/${id}`);
}
  getHouseTypeList(): Observable<any>{
    return this.http.get(this.base_url + '/house/type');
  }

  houseList(param = ''){
    return this.http.get(this.base_url + '/house/list/' + param);
  }

  getSingleHouse(houseId){
    return this.http.get(this.base_url + '/house/single/' + houseId);
  }

  filterHouses(param = ''){
    return this.http.get(this.base_url + '/house/filter' + param );
  }

}
