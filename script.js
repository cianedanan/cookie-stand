'use strict';

let hours = ['6 AM', '7 AM', '8 AM', '9AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', ];

let dataTable = document.getElementById('cookieData');

let grandTotalCookies = 0;

let hourlyTotals = [];

let locations = [];

let tRow;
let tData;
let tHead;

function Store(location, min, max, avgCookie){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.totalCookies = 0;
  this.numberOfCookiesPerHour = [];
  locations.push(this);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Store.prototype.calcCookies = function(){
  for(let i = 0; i < (hours.length);i++){
    this.numberOfCookiesPerHour[i] = Math.ceil(randomNum(this.min, this.max) * this.avgCookie);
    this.totalCookies += this.numberOfCookiesPerHour[i];
  }
};

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


for (let key in locations){
  locations[key].calcCookies();
}

function calcHourlyTotals(){
  for(let j = 0; j < hours.length; j++){
    let hourlyTotal = 0;
    for(let key in locations){
      hourlyTotal += (locations[key].numberOfCookiesPerHour[j]);
      hourlyTotals[j] = hourlyTotal;
    }
  }
  // console.log(hourlyTotals);
}
calcHourlyTotals();

function calcGrandTotal(){
  for(let j = 0; j < hours.length; j++){
    for(let key in locations){
      grandTotalCookies += (locations[key].numberOfCookiesPerHour[j]);
    }
  }
}
calcGrandTotal();

function renderRow(textcontent){
  tRow = document.createElement('tr');
  dataTable.appendChild(tRow);

  tHead = document.createElement('th');
  tHead.textContent = textcontent;
  tRow.appendChild(tHead);
}

function renderBody(){

  for(let key in locations){

    renderRow(locations[key].location);

    for(let i in locations[key].numberOfCookiesPerHour){
      tData = document.createElement('td');
      tData.textContent = locations[key].numberOfCookiesPerHour[i];
      tRow.appendChild(tData);
    }

    tData = document.createElement('td');
    tData.textContent = locations[key].totalCookies;
    tRow.appendChild(tData);

  }
}

function renderHeader(){

  renderRow();

  for (let i = 0; i < hours.length; i++){
    tHead = document.createElement('th');
    tHead.textContent = hours[i];
    tRow.appendChild(tHead);
  }

  tHead = document.createElement('th');
  tHead.textContent = 'Daily Totals';
  tRow.appendChild(tHead);
}

function renderFooter(){

  renderRow('Hourly Totals');

  for(let i in hourlyTotals){
    tData = document.createElement('td');
    tData.textContent = hourlyTotals[i];
    tRow.appendChild(tData);
  }

  tHead = document.createElement('th');
  tHead.textContent = grandTotalCookies;
  tRow.appendChild(tHead);
}

let formEl = document.getElementById('store-form');

formEl.addEventListener ('submit',
  function(event){
    event.preventDefault();
    if(event.target.store_location.value === '' || event.target.cust_max.value === '' || event.target.cust_min.value === '' || event.target.avg_cookie.value === ''){
      alert('Please fill in all inputs for accurate data.');
    } else if(event.target.cust_max.value < event.target.cust_min.value){
      alert('Min cant be higher than max.');
    } else{
      const store_location = event.target.store_location.value;
      const cust_min = event.target.cust_min.value;
      const cust_max = event.target.cust_max.value;
      const avg_cookie = event.target.avg_cookie.value;
      const newStore = new Store(store_location, cust_min, cust_max, avg_cookie);
      console.log(newStore);
      newStore.calcCookies();
      calcHourlyTotals();
      grandTotalCookies += newStore.totalCookies;
      const table = document.getElementById('cookieData');
      table.innerHTML = '';
      renderHeader(newStore);
      renderBody(newStore);
      renderFooter(newStore);
    }
  }
);



renderHeader();
renderBody();
renderFooter();
