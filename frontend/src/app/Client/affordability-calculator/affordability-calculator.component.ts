import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affordability-calculator',
  templateUrl: './affordability-calculator.component.html',
  styleUrls: ['./affordability-calculator.component.css']
})
export class AffordabilityCalculatorComponent {

  affordabilityData = {
    annualIncome:  70000,
    monthlyDebts: 250,
    downPayment: 20000,
    debtToIncome: 36,
    interestRate: 3.875,
    loanTerm: 30,
    taxes: 2800,
    taxPercent: 0.8,
    homeInsurance: 800,
    hoaDues: 0,
    payment: 1850,
    affordableValue: 308122
}
imgSize = function(image) {
      if(image === 'pig'){
					return (100 - this.affordabilityData.debtToIncome*1)+'px'; 
      }
      else {
					return (40 + this.affordabilityData.debtToIncome*1)+'px';
      }
    }
 get getAffordability() {
   this.affordabilityData.payment = (this.affordabilityData.annualIncome / 12) * (this.affordabilityData.debtToIncome / 100) - this.affordabilityData.monthlyDebts * 1;
   var yrs = this.affordabilityData.loanTerm * 12;
   var rte = this.affordabilityData.interestRate / 1200;
   var pmt = this.affordabilityData.payment;
   pmt = pmt - this.affordabilityData.hoaDues * 1;
   var amt = pmt / (rte + ( rte/(Math.pow((1+rte), (yrs))-1)));
   pmt = pmt - (amt * .0071043 / 12);
   amt = pmt / (rte + ( rte/(Math.pow((1+rte), (yrs))-1)));
   if(amt < 1)
   {
     amt=0;
   }
   if (this.affordabilityData.payment < 300)
   {
     this.affordabilityData.payment = 300;
   }
   if(name=='ptaxPercent') {
     this.affordabilityData.taxes = (this.affordabilityData.taxPercent / 100) * amt;
   }
   else if(name == 'slider' || name == 'ptax') {
     this.affordabilityData.taxPercent = this.affordabilityData.taxes/amt * 100;
}
   this.affordabilityData.affordableValue = amt + this.affordabilityData.downPayment * 1;
return null;
   
}

}

