import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  value: number = 23;
  FromCurrency: string = 'USD';
  ToCurrency : string = 'INR'
   rates : any = {
    USD: {
        INR: 81.11,
        EUR: 0.92,
        JPY: 129.35,
        GBP: 0.82,
    },
    INR: {
        GBP: 0.01,
        EUR: 0.011,
        JPY: 1.59,
    },
    EUR: {
        JPY: 140.29,
        GBP: 0.89,
    },
    JPY: {
        GBP: 0.0063,
    },

};

  currency:any = {
    inr: 23,
    dt: 25,
  } 
  list = ['USD', 'INR','EUR','JPY','GBP'];

  calculateResult(): number {
    if(this.FromCurrency === this.ToCurrency)
    {
      return this.value;
    }
    let output = this.rates[this.FromCurrency][this.ToCurrency];
    if(!output)
    {
      output = 1 /this.rates[this.ToCurrency][this.FromCurrency];
    }
    return this.value * output;
  }
}
