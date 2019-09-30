import { Component, OnInit } from '@angular/core';
import { TitleService } from './common/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
      constructor(private titleService: TitleService) {}
      
      ngOnInit(){
         this.titleService.init();
      }
}
