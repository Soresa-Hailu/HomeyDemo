import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-vs-buy-calculator',
  templateUrl: './rent-vs-buy-calculator.component.html',
  styleUrls: ['./rent-vs-buy-calculator.component.scss']
})
export class RentVsBuyCalculatorComponent {

 mortgageData = {
    apr: 0,
    term: 0
}
breakEvenData = {
    debt: 0,
    expense: 0,
    income: 0
}

  get mortgage() {

   if(this.mortgageData.apr > 0 && this.mortgageData.term > 0)
       {  
           var x = this.mortgageData.apr / this.mortgageData.term;
           return x;
}
else
   return null;
}

 get mortgagePercent() {
       
      if(this.mortgageData.apr > 0 && this.mortgageData.term > 0)
{
           var x = this.mortgageData.apr / this.mortgageData.term;
           return x * 100;
}
else 
return null;
}

  get breakEven() {
    if(this.breakEvenData.debt > 0 && this.breakEvenData.expense > 0 && this.breakEvenData.income > 0)
{
     var x = ( this.breakEvenData.debt + this.breakEvenData.expense ) / this.breakEvenData.income;
     return x;
}
else
return null;
}
  get breakEvenPercent() {
    if(this.breakEvenData.debt > 0 && this.breakEvenData.expense > 0 && this.breakEvenData.income > 0)
{
   var x = (this.breakEvenData.debt + this.breakEvenData.expense ) / this.breakEvenData.income;
   return x * 100;
}
   else
    return null;
}

}



