'use strict';

// add/remove locations from the daily report

// TODO:  transform the lists into tables, render methods for tables on constructor(wrap the for loop)
// TODO: Strech goals - total all of the stores, totals per hour per store


var sectionToTarget = document.getElementById('store-Location-Hourly-Totals-Table');
var multiStoreHourlyTotalsArray = [];

// Object Literal constructor function for each store location
var StoreLocation = function (
  storeLocation,
  minimumCustomersPerHour,
  maximumCustomersPerHour,
  averageCookiePerCustomer,
  openingHour,
  closingHour,
  hourlyCookiesPurchasedArray,
  totalCookiesSold
) {
  this.storeLocation = storeLocation;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiePerCustomer = averageCookiePerCustomer;
  this.openingHour = openingHour;
  this.closingHour = closingHour;
  this.hourlyCookiesPurchasedArray = hourlyCookiesPurchasedArray;
  this.totalCookiesSold = totalCookiesSold;
};

StoreLocation.prototype.calculateRandomCustomersPerHour = function () {
  return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
};

StoreLocation.prototype.cookieCalculations = function () {
  for (var i = this.openingHour; i < this.closingHour; i++) {
    var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

    this.totalCookiesSold += averageCookiesPerHour;

    this.hourlyCookiesPurchasedArray.push(averageCookiesPerHour);
  }
  return this.hourlyCookiesPurchasedArray;
};
StoreLocation.prototype.render = function () {
  console.log(this.storeLocation, this.hourlyCookiesPurchasedArray);
  this.totals = 0;
  var newElem = createTableRowElem(tRow);
  //newElem.innerText = c
  createTDElem(newElem, this.storeLocation);
  for (var j = 0; j < this.hourlyCookiesPurchasedArray.length; j++) {
    if (!multiStoreHourlyTotalsArray[j]){
      multiStoreHourlyTotalsArray[j] = 0;
    }
    multiStoreHourlyTotalsArray[j] += this.hourlyCookiesPurchasedArray[j];

    this.totals += this.hourlyCookiesPurchasedArray[j];
    createTDElem(newElem, this.hourlyCookiesPurchasedArray[j]);
  }
  createTDElem(newElem, this.totals);
  //return hourly total for all stores
};
var storeLocationFormElement = document.getElementsByClassName('storeLocationBuilder')[0];
storeLocationFormElement.addEventListener('submit', (event)=>{
  event.preventDefault();
  var name = (typeof event.target[0].value === 'string') ? event.target[0].value : null;
  var minCustomer = (typeof parseInt(event.target[1].value) === 'number') ? parseInt(event.target[1].value) : null;
  var maxCustomer = (typeof parseInt(event.target[2].value) === 'number') ? parseInt(event.target[2].value) : null;
  var averageCookies = (typeof parseInt(event.target[3].value) === 'number') ? parseInt(event.target[3].value) : null; 

  var newLocation = new StoreLocation(name, minCustomer, maxCustomer, averageCookies, 6,20, [],0);
  newLocation.cookieCalculations();

  constructorsArray.push(newLocation);
  //rerender
  document.getElementById('cookie-totals-table').innerHTML = '';
  generateTable();
});

var sumArray = function(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};
var firstAndPikeStore = new StoreLocation('1st and Pike', 23, 65, 6.3, 6, 20, [], 0);
var seaTacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2, 6, 20, [], 0);
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7, 6, 20, [], 0);
var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3, 6, 20, [], 0);
var alki = new StoreLocation('Alki', 2, 16, 4.6, 6, 20, [], 0);

// Call individual object literal functions to generate data for lists.
// In other words turns on the JS functionality.
firstAndPikeStore.cookieCalculations();
seaTacAirport.cookieCalculations();
seattleCenter.cookieCalculations();
capitolHill.cookieCalculations();
alki.cookieCalculations();

// 4 steps necessary to add elements to the DOM:
// Reference container to place elem in.
// Build new elem to place in referenced container.
// Fill the elem with values.
// Add the new elem to the page.

// Create a <table>
var createTableElem = function () {
  var tableContainer = document.createElement('table');
  sectionToTarget.appendChild(tableContainer);

  return tableContainer;
};

// Create a <tr>
var createTableRowElem = function (targetElement) {
  var tableRowElem = document.createElement('tr');
  targetElement.appendChild(tableRowElem);

  return tableRowElem;
};

// Create <th>'s
var createTHElem = function (targetElement, tableEntryElem) {
  var tableCellElem = document.createElement('th');
  tableCellElem.textContent = tableEntryElem;
  targetElement.appendChild(tableCellElem);

  return tableCellElem;
};

// Create <td>'s
var createTDElem = function (targetElement, tableEntryElem) {
  var tableCellElem = document.createElement('td');
  tableCellElem.textContent = tableEntryElem;
  targetElement.appendChild(tableCellElem);

  return tableCellElem;
};

// Store object literals of stores into an array
var constructorsArray = [
  firstAndPikeStore,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki
];

// Create  table element.
var newTable = createTableElem();
newTable.id = 'cookie-totals-table';
var tRow = createTableRowElem(newTable);

var generateTable = function () {
  tRow = createTableRowElem(newTable);
  console.log('in gen');
  var newElem = createTableRowElem(tRow);
  createTHElem(newElem, 'Store Location');

  for (var i = 0; i < constructorsArray[0].hourlyCookiesPurchasedArray.length; i++) {
    var amPm = 'am';
    var hours = i + 7;
    if ( hours > 12){
      hours -= 12;
      amPm = 'pm';
    }
    createTHElem(newElem, hours + amPm);
  }
  createTHElem(newElem, 'Daily Totals');

  for (i = 0; i < constructorsArray.length; i++) {
    constructorsArray[i].render();
  }
  newElem = createTableRowElem(tRow);
  createTDElem(newElem,'Hourly totals');
  for (i = 0; i < multiStoreHourlyTotalsArray.length; i++){
    createTDElem(newElem, multiStoreHourlyTotalsArray[i]);
  }
  createTDElem(newElem, sumArray(multiStoreHourlyTotalsArray));
};

generateTable();




