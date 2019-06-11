'use strict';

// add/remove locations from the daily report

// TODO:  transform the lists into tables, render methods for tables on constructor(wrap the for loop)
// TODO: Strech goals - total all of the stores, totals per hour per store

// Object Literal constructor function for each store location

var storeLocationSection = document.getElementById('store-Location-Hourly-Totals');

var StoreLocation = function(
  storeLocation, 
  minimumCustomersPerHour, 
  maximumCustomersPerHour, 
  averageCookiePerCustomer,
  openingHour,
  closingHour,
  hourlyCookiesPurchasedArray,
  totalCookiesSold ) {
  this.storeLocation = storeLocation;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookiePerCustomer = averageCookiePerCustomer;
  this.openingHour = openingHour;
  this.closingHour = closingHour;
  this.hourlyCookiesPurchasedArray = hourlyCookiesPurchasedArray;
  this.totalCookiesSold = totalCookiesSold;
};
StoreLocation.prototype.calculateRandomCustomersPerHour = function() {
  return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
};
StoreLocation.prototype.calculateAverageCookiesPerCustomerPerHour = function() {
  for (var i = this.openingHour; i < this.closingHour; i++) {
    var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

    this.totalCookiesSold += averageCookiesPerHour;

    this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
  }
  return this.hourlyCookiesPurchasedArray;
};

var firstAndPikeStore = new StoreLocation('1st and Pike', 23, 65, 6.3, 6, 20, [], 0);
var seaTacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2, 6, 20, [], 0);
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7, 6, 20, [], 0);
var capitolHill = new StoreLocation('Capitol Hill',20, 38, 2.3, 6, 20, [], 0);
var alki = new StoreLocation('Alki', 2, 16, 4.6, 6, 20, [], 0);

// Call individual object literal functions to generate data for lists. 
// In other words turns on the JS functionality.
firstAndPikeStore.calculateAverageCookiesPerCustomerPerHour();
seaTacAirport.calculateAverageCookiesPerCustomerPerHour();
seattleCenter.calculateAverageCookiesPerCustomerPerHour();
capitolHill.calculateAverageCookiesPerCustomerPerHour();
alki.calculateAverageCookiesPerCustomerPerHour();

// Store object literals of stores into an array
var storeLocationObjectLiteralsArray = [
  firstAndPikeStore,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki
];

// 4 steps necessary to add elements to the DOM:
// Reference container to place elem in.
// Build new elem to place in referenced container.
// Fill the elem with values.
// Add the new elem to the page.

// Function to create <h2> title element.
var storeLocationH2ELems = function(singleStoreObjectLiteral) {
  var storeLocationHeaderElem = document.createElement('h2');
  storeLocationHeaderElem.textContent = singleStoreObjectLiteral.storeLocation;
  storeLocationSection.appendChild(storeLocationHeaderElem);

  return;
};

// Function to create <h3> title element.
var cookiesPurchasedH3Elems = function() {
  var headerForListEntries = document.createElement('h3');
  headerForListEntries.textContent = 'Cookies Purchased Per Hour';
  storeLocationSection.appendChild(headerForListEntries);

  return;
};

// Function to create empty <ul> element.
var emptyULElems = function() {
  var parentULElemForListEntries = document.createElement('ul');
  storeLocationSection.appendChild(parentULElemForListEntries);

  return;
};

// Function to create generic <li> element list entry.
var generateLIElems = function(message) {
  var childLIElemForListEntries = document.createElement('li');
  childLIElemForListEntries.textContent = message;
  storeLocationSection.appendChild(childLIElemForListEntries);

  return;
};

// Function to fill <li> element with hourly cookies sold.
var hourlyCookiesSoldLIElems = function(singleStoreObjectLiteral) {
  var hourlyCookiesSoldMessage = singleStoreObjectLiteral.hourlyCookiesPurchasedArray[j];
  generateLIElems(hourlyCookiesSoldMessage);

  return;
};

// Function to fill <li> element with total cookies sold.
var totalCookiesSoldLIElems = function(singleStoreObjectLiteral) {
  var totalCookiesSoldMessage = 'Total cookies sold: ' + singleStoreObjectLiteral.totalCookiesSold;
  generateLIElems(totalCookiesSoldMessage);

  return;
};

// Nested for loop to iterate over the arrays/objects and pull out what is necessary sequentially and populate it to the screen.
// In other words, complete and utter DOM mastery.
for (var i = 0; i < storeLocationObjectLiteralsArray.length; i++) {

  // Store current Object Literal in a temporary variable
  var currentStoreLocationObjectLiteral = storeLocationObjectLiteralsArray[i];

  storeLocationH2ELems(currentStoreLocationObjectLiteral);
  
  cookiesPurchasedH3Elems();
  
  emptyULElems();

  // For loop to iterate over each Object Literal's individual hourly cookies array.
  for (var j = 0; j < currentStoreLocationObjectLiteral.hourlyCookiesPurchasedArray.length; j++) {

    // Add <li> entries from the hourly cookies array.
    hourlyCookiesSoldLIElems(currentStoreLocationObjectLiteral);

    // Within the second for loop a conditional to launch a final result of total
    if (j === (currentStoreLocationObjectLiteral.hourlyCookiesPurchasedArray.length - 1)) {
      totalCookiesSoldLIElems(currentStoreLocationObjectLiteral);
    }
  }

}



