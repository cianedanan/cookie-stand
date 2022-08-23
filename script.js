let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let hourlyTotal = 0;



function Store(location, min, max, avgCookie){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.totalCookies = 0;
  this.numbersOfCustomer = [];
  this.numberOfCookies = [];

  this.calcRandomCust = function(){
    for (let i = 0; i < (hours.length); i++){
      this.numbersOfCustomer.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  };

  this.calcCookiesPerCustomer = function(){
    for(let i = 0; i < this.numbersOfCustomer.length; i++){
      this.numberOfCookies.push(Math.floor(this.numbersOfCustomer[i] * this.avgCookie));
    }
  };

  this.calcTotalCookies = function(){
    for(let i = 0; i < this.numberOfCookies.length; i++){
      this.totalCookies += this.numberOfCookies[i];
    }
  };
  this.calcRandomCust();
  this.calcCookiesPerCustomer();
  this.calcTotalCookies();
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
