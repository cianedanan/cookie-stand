let hours = ['6 AM', '7 AM', '8 AM', '9AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', ];

let dataTable = document.getElementById('cookieData');

let grandTotalCookies = 0;

let hourlyTotals = [];

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

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let locations = [seattle, tokyo, dubai, paris, lima];

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
  console.log(hourlyTotals);
}
calcHourlyTotals();

function renderBody(){

  for(let key in locations){
    tRow = document.createElement('tr');
    dataTable.appendChild(tRow);

    let tHead = document.createElement('th');
    tHead.textContent = locations[key].location;
    tRow.appendChild(tHead);

    for(let i in locations[key].numberOfCookiesPerHour){
      tData = document.createElement('td');
      tData.textContent = locations[key].numberOfCookiesPerHour[i];
      tRow.appendChild(tData);
    }

    tData = document.createElement('td');
    tData.textContent = locations[key].totalCookies;
    grandTotalCookies += locations[key].totalCookies;
    tRow.appendChild(tData);

  }
}

function renderHeader(){


  tRow = document.createElement('tr');
  dataTable.appendChild(tRow);

  tHead = document.createElement('th');
  tRow.appendChild(tHead);

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

  tRow = document.createElement('tr');
  dataTable.appendChild(tRow);

  tHead = document.createElement('th');
  tHead.textContent = 'Hourly Totals';
  tRow.appendChild(tHead);

  for(let i in hourlyTotals){
    tData = document.createElement('td');
    tData.textContent = hourlyTotals[i];
    tRow.appendChild(tData);
  }

  tHead = document.createElement('th');
  tHead.textContent = grandTotalCookies;
  tRow.appendChild(tHead);
}

renderHeader();
renderBody();
renderFooter();

