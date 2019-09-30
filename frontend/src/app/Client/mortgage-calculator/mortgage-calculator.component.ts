import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../common/services/common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent {

   mortgageData = {
    apr: 0,
    term: 0,
    amt: 0
}
public doughnutChartLabels = ['Monthly Payment', 'Total Payment', 'Total Interest'];
  public doughnutChartData = [120, 150, 180];
  public doughnutChartType = 'doughnut';
get mortgage() {

   if(this.mortgageData.apr > 0 && this.mortgageData.term > 0 && this.mortgageData.amt > 0)
       {  
           var x = this.mortgageData.apr / 1200;
           var y = this.mortgageData.term * 12;
           this.doughnutChartData = [this.mortgageData.amt*(x*Math.pow((1+x),y))/(Math.pow((1+x),y)-1), 150, 180];
           return this.mortgageData.amt * (x * Math.pow((1 + x), y))/(Math.pow((1 + x), y) -1);
}
else
   return null;
}
}
