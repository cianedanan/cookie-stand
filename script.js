let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', ];

let tBody = document.getElementById('cookieData');

let tRow = document.getElementById('cookieData');

// let tData = document.getElementById('cookieData');

let grandTotalCookies = 0;

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

// function dailyCookies(){
//   for (let key in locations){

//   }
// }
// dailyCookies();

function renderBody(){
  let tData;

  for(let key in locations){
    tRow = document.createElement('tr');
    tBody.appendChild(tRow);

    let tHead = document.createElement('th');
    tHead.textContent = locations[key].location;
    tBody.appendChild(tHead);

    for(let i in locations[key].numberOfCookiesPerHour){
      tData = document.createElement('td');
      tData.textContent = locations[key].numberOfCookiesPerHour[i];
      console.log(locations[key].numberOfCookiesPerHour[i]);
      tBody.appendChild(tData);
    }

    tData = document.createElement('td');
    tData.textContent = locations[key].totalCookies;
    grandTotalCookies += locations[key].totalCookies;
    tBody.appendChild(tData);

  }
}

function renderHeader(){
  tRow = document.createElement('tr');
  tBody.appendChild(tRow);

  let tHead = document.createElement('th');
  tBody.appendChild(tHead);

  for (let i = 0; i < hours.length; i++){
    tHead = document.createElement('th');
    tHead.textContent = hours[i];
    tBody.appendChild(tHead);
  }

  tHead = document.createElement('th');
  tHead.textContent = 'Daily Totals';
  tBody.appendChild(tHead);
}

function renderFooter(){

  tRow = document.createElement('tr');
  tBody.appendChild(tRow);

  let tHead = document.createElement('th');
  tHead.textContent = 'Hourly Totals';
  tBody.appendChild(tHead);

}


renderHeader();
renderBody();
renderFooter();

