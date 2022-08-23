let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let display = [];

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  calcRandomCust: function(){
    for (let i = 0; i < (hours.length); i++){
      this.numbersOfCustomer.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },

  calcCookiesPerCustomer: function(){
    for(let i = 0; i < this.numbersOfCustomer.length; i++){
      this.numberOfCookies.push(Math.floor(this.numbersOfCustomer[i] * this.avgCookie));
    }
  },

  calcTotalCookies: function(){
    for(let i = 0; i < this.numberOfCookies.length; i++){
      this.totalCookies += this.numberOfCookies[i];
    }
  },

  calcDisplayData: function(){
    for(let i = 0; i < (hours.length); i++){
      display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },
};

seattle.calcRandomCust();
console.log(seattle.numbersOfCustomer);
seattle.calcCookiesPerCustomer();
console.log(seattle.numberOfCookies);
seattle.calcTotalCookies();
console.log(seattle.totalCookies);
seattle.calcDisplayData();
console.log(display);

