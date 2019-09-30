import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  latitude = 9.0307553;
  longitude = 38.750724;
  locationChosen = false;

 onChoseLocation(event) {
   this.latitude = event.coords.lat;
   this.longitude = event.coords.lng;
   this.locationChosen = true;
}
}
  
