import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent {

  loanData = {
    amount: 1000000,
    apr: 5.6,
    years: 4
}
public doughnutChartLabels = ['Monthly Payment', 'Total Payment', 'Total Interest'];
  public doughnutChartType = 'doughnut';
get loan() {

   if(this.loanData.amount > 0 && this.loanData.apr > 0 && this.loanData.years > 0)
       {  var principal = this.loanData.amount;
          var interest = this.loanData.apr /100 /12;
          var payments = this.loanData.years * 12;
          var x = Math.pow(1+interest, payments);
          var monthly = (principal * x * interest)/(x-1);
         return monthly;
}
else
   return null;
}
get total()
{
   if(this.loanData.amount > 0 && this.loanData.apr > 0 && this.loanData.years > 0){
    var principal = this.loanData.amount;
          var interest = this.loanData.apr /100 /12;
          var payments = this.loanData.years * 12;
          var x = Math.pow(1+interest, payments);
          var monthly = (principal * x * interest)/(x-1);
          return monthly * payments;
}
else
   return null;
}

get totalinterest(){
     if(this.loanData.amount > 0 && this.loanData.apr > 0 && this.loanData.years > 0){
    var principal = this.loanData.amount;
          var interest = this.loanData.apr /100 /12;
          var payments = this.loanData.years * 12;
          var x = Math.pow(1+interest, payments);
          var monthly = (principal * x * interest)/(x-1);
      return (monthly * payments)-principal;
}
else 
return null;
}
}
