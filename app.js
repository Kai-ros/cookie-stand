'use strict';

// add/remove locations from the daily report

// TODO: add constructors, move DOM manipulations into functions, transform the lists into tables
// TODO: Strech goals - total all of the stores, totals per hour per store

// Object literals for each store location

var firstAndPikeStore = {
  storeLocation : '1st and Pike',
  minimumCustomersPerHour : 23,
  maximumCustomersPerHour : 65,
  averageCookiePerCustomer : 6.3,
  openingHour : 6,
  closingHour : 20,
  hourlyCookiesPurchasedArray : [],
  totalCookiesSold : 0,
  calculateRandomCustomersPerHour: function() {
    return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
  },
  calculateAverageCookiesPerCustomerPerHour: function() {
    for (var i = this.openingHour; i < this.closingHour; i++) {
      var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

      this.totalCookiesSold += averageCookiesPerHour;

      this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
    }
    return this.hourlyCookiesPurchasedArray;
  }
};

var seaTacAirport = {
  storeLocation : 'SeaTac Airport',
  minimumCustomersPerHour : 3,
  maximumCustomersPerHour : 24,
  averageCookiePerCustomer : 1.2,
  openingHour : 6,
  closingHour : 20,
  hourlyCookiesPurchasedArray : [],
  totalCookiesSold : 0,
  calculateRandomCustomersPerHour: function() {
    return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
  },
  calculateAverageCookiesPerCustomerPerHour: function() {
    for (var i = this.openingHour; i < this.closingHour; i++) {
      var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

      this.totalCookiesSold += averageCookiesPerHour;

      this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
    }
    return this.hourlyCookiesPurchasedArray;
  }
};

var seattleCenter = {
  storeLocation : 'Seattle Center',
  minimumCustomersPerHour : 11,
  maximumCustomersPerHour : 38,
  averageCookiePerCustomer : 3.7,
  openingHour : 6,
  closingHour : 20,
  hourlyCookiesPurchasedArray : [],
  totalCookiesSold : 0,
  calculateRandomCustomersPerHour: function() {
    return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
  },
  calculateAverageCookiesPerCustomerPerHour: function() {
    for (var i = this.openingHour; i < this.closingHour; i++) {
      var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

      this.totalCookiesSold += averageCookiesPerHour;

      this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
    }
    return this.hourlyCookiesPurchasedArray;
  }
};

var capitolHill = {
  storeLocation : 'Capitol Hill',
  minimumCustomersPerHour : 20,
  maximumCustomersPerHour : 38,
  averageCookiePerCustomer : 2.3,
  openingHour : 6,
  closingHour : 20,
  hourlyCookiesPurchasedArray : [],
  totalCookiesSold : 0,
  calculateRandomCustomersPerHour: function() {
    return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
  },
  calculateAverageCookiesPerCustomerPerHour: function() {
    for (var i = this.openingHour; i < this.closingHour; i++) {
      var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

      this.totalCookiesSold += averageCookiesPerHour;

      this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
    }
    return this.hourlyCookiesPurchasedArray;
  }
};

var alki = {
  storeLocation : 'Alki',
  minimumCustomersPerHour : 2,
  maximumCustomersPerHour : 16,
  averageCookiePerCustomer : 4.6,
  openingHour : 6,
  closingHour : 20,
  hourlyCookiesPurchasedArray : [],
  totalCookiesSold : 0,
  calculateRandomCustomersPerHour: function() {
    return this.minimumCustomersPerHour + (Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1)));
  },
  calculateAverageCookiesPerCustomerPerHour: function() {
    for (var i = this.openingHour; i < this.closingHour; i++) {
      var averageCookiesPerHour = Math.floor(this.averageCookiePerCustomer * this.calculateRandomCustomersPerHour());

      this.totalCookiesSold += averageCookiesPerHour;

      this.hourlyCookiesPurchasedArray.push(i + '00 - ' + (i + 1) + '00 : ' + averageCookiesPerHour + ' cookies');
    }
    return this.hourlyCookiesPurchasedArray;
  }
};

// Call individual object literal functions to generate data for lists.
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


// Nested for loop to iterate over the arrays/objects and pull out what is necessary sequentially and populate it to the screen.
// In other words, complete and utter DOM mastery.
for (var i = 0; i < storeLocationObjectLiteralsArray.length; i++) {
  // In each loop I need to access the ObjLit's and generate details

  // Store current Object Literal in a temporary variable
  var currentStoreLocationObjectLiteral = storeLocationObjectLiteralsArray[i];

  // Store location of list entries
  var storeLocationSection = document.getElementById('store-Location-Hourly-Totals');
  var storeLocationHeaderElem = document.createElement('h2');
  storeLocationHeaderElem.textContent = currentStoreLocationObjectLiteral.storeLocation;
  storeLocationSection.appendChild(storeLocationHeaderElem);

  // Header for list entries
  var headerForListEntries = document.createElement('h3');
  headerForListEntries.textContent = 'Cookies Purchased Per Hour';
  storeLocationSection.appendChild(headerForListEntries);

  // Add empty <ul> elem.
  var parentULElemForListEntries = document.createElement('ul');
  storeLocationSection.appendChild(parentULElemForListEntries);

  // For loop to iterate over each Object Literal's individual hourly cookies array.
  for (var j = 0; j < currentStoreLocationObjectLiteral.hourlyCookiesPurchasedArray.length; j++) {

    // Add <li> entries from the hourly cookies array.
    var childLIElemForListEntries = document.createElement('li');
    childLIElemForListEntries.textContent = currentStoreLocationObjectLiteral.hourlyCookiesPurchasedArray[j];
    storeLocationSection.appendChild(childLIElemForListEntries);

    // Within the second for loop a conditional to launch a final result of total
    if (j === (currentStoreLocationObjectLiteral.hourlyCookiesPurchasedArray.length - 1)) {
      var totalCookiesSoldElemForEachStore = document.createElement('li');
      var totalCookiesSoldMessage = 'Total cookies sold: ' + currentStoreLocationObjectLiteral.totalCookiesSold;
      totalCookiesSoldElemForEachStore.textContent = totalCookiesSoldMessage;
      storeLocationSection.appendChild(totalCookiesSoldElemForEachStore);
    }
  }

}



