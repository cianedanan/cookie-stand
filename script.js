let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  display: [],

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
      this.display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },

  displayData: function(){
    let listEl = document.getElementById('seattle');
    for (let i = 0; i < this.display.length; i++) {
      let newListEl = document.createElement('li');
      newListEl.textContent = this.display[i];
      listEl.appendChild(newListEl);
    }
    let newListEl = document.createElement('li');
    newListEl.textContent = `Total: ${this.totalCookies} cookies`;
    listEl.appendChild(newListEl);
  }
};

seattle.calcRandomCust();
// console.log(seattle.numbersOfCustomer);
seattle.calcCookiesPerCustomer();
// console.log(seattle.numberOfCookies);
seattle.calcTotalCookies();
// console.log(seattle.totalCookies);
seattle.calcDisplayData();
// console.log(seattle.display);
seattle.displayData();

let tokyo = {
  location: 'tokyo',
  min: 3,
  max: 24,
  avgCookie: 1.2,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  display: [],

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
      this.display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },

  displayData: function(){
    let listEl = document.getElementById('tokyo');

    for (let i = 0; i < this.display.length; i++) {
      let newListEl = document.createElement('li');
      newListEl.textContent = this.display[i];
      listEl.appendChild(newListEl);
    }
    let newListEl = document.createElement('li');
    newListEl.textContent = `Total: ${this.totalCookies} cookies`;
    listEl.appendChild(newListEl);
  }
};

tokyo.calcRandomCust();
// console.log(tokyo.numbersOfCustomer);
tokyo.calcCookiesPerCustomer();
// console.log(tokyo.numberOfCookies);
tokyo.calcTotalCookies();
// console.log(tokyo.totalCookies);
tokyo.calcDisplayData();
// console.log(tokyo.display);
tokyo.displayData();

let dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgCookie: 3.7,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  display: [],

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
      this.display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },

  displayData: function(){
    let listEl = document.getElementById('dubai');
    for (let i = 0; i < this.display.length; i++) {
      let newListEl = document.createElement('li');
      newListEl.textContent = this.display[i];
      listEl.appendChild(newListEl);
    }
    let newListEl = document.createElement('li');
    newListEl.textContent = `Total: ${this.totalCookies} cookies`;
    listEl.appendChild(newListEl);
  }
};

dubai.calcRandomCust();
// console.log(dubai.numbersOfCustomer);
dubai.calcCookiesPerCustomer();
// console.log(dubai.numberOfCookies);
dubai.calcTotalCookies();
// console.log(dubai.totalCookies);
dubai.calcDisplayData();
// console.log(dubai.display);
dubai.displayData();

let paris = {
  location: 'paris',
  min: 20,
  max: 38,
  avgCookie: 2.3,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  display: [],

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
      this.display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },

  displayData: function(){
    let listEl = document.getElementById('paris');

    for (let i = 0; i < this.display.length; i++) {
      let newListEl = document.createElement('li');
      newListEl.textContent = this.display[i];
      listEl.appendChild(newListEl);
    }
    let newListEl = document.createElement('li');
    newListEl.textContent = `Total: ${this.totalCookies} cookies`;
    listEl.appendChild(newListEl);
  }
};

paris.calcRandomCust();
// console.log(paris.numbersOfCustomer);
paris.calcCookiesPerCustomer();
// console.log(paris.numberOfCookies);
paris.calcTotalCookies();
// console.log(paris.totalCookies);
paris.calcDisplayData();
// console.log(paris.display);
paris.displayData();

let lima = {
  location: 'lima',
  min: 2,
  max: 16,
  avgCookie: 4.6,
  numbersOfCustomer: [],
  numberOfCookies: [],
  totalCookies: 0,
  display: [],

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
      this.display[i] = `${hours[i]}:${this.numberOfCookies[i]} cookies`;
    }
  },

  displayData: function(){
    let listEl = document.getElementById('lima');

    for (let i = 0; i < this.display.length; i++) {
      let newListEl = document.createElement('li');
      newListEl.textContent = this.display[i];
      listEl.appendChild(newListEl);
    }
    let newListEl = document.createElement('li');
    newListEl.textContent = `Total: ${this.totalCookies} cookies`;
    listEl.appendChild(newListEl);
  }
};

lima.calcRandomCust();
// console.log(lima.numbersOfCustomer);
lima.calcCookiesPerCustomer();
// console.log(lima.numberOfCookies);
lima.calcTotalCookies();
// console.log(lima.totalCookies);
lima.calcDisplayData();
// console.log(lima.display);
lima.displayData();
