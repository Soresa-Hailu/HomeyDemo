import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { UserService } from '../../../../common/services/user.service';
import { CommonService } from '../../../../common/services/common.service';
import { Router } from "@angular/router";
import { AgentService } from '../../../../common/services/agent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Array<string>;
  cityList = [];
  houseTypeList;
  searchHouData = { houseFor: 'sell' };
  hideOwnHouse = false;

  constructor(
    private _http: HttpClient,
    private userService: UserService,
    private commonService: CommonService,
    private router: Router
  ) { }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? [] : this.cityList.map(v => { return (v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)? v.name : ''
      }).filter(a => a).slice(0, 10) );

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => {
        this.images = images;
      });

    this.commonService.getCitylist()
      .subscribe(response => {
        this.cityList = response;
        // response.forEach(element => {
        //   this.cityList.push(element.name);
        // });
      });

    this.commonService.getHouseTypeList()
      .subscribe(response => {
        this.houseTypeList = response;
      });

    this.hideOwnHouse = this.userService.currentUser && this.userService.currentUser.user._id ? true : false;
  }

  searchHou(value) {
    value.houseFor = this.searchHouData.houseFor;

    var queryParamsTemp: any = {
      houseFor: value.houseFor,
      type: value.type
    };
    
    queryParamsTemp.city = this.cityList.map(e => { 
      return e.name == value.city ? e._id : ''
     }).filter(ele => ele);

    this.router.navigate(['/users/house/search'], {
      queryParams: queryParamsTemp //{ 'city': value.city, 'houseFor': value.houseFor, 'type': value.type }
    })
  }

  queryParams = '?status=available';

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

}
