'use strict'

let tableEl = document.getElementById('tableEl')
let seattleSales = document.getElementById('seattle');

let timeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function renderHeader(){
    let headerRow = document.createElement('tr');
    
    tableEl.appendChild(headerRow);
    let location = document.createElement('th');
    location.textContent = 'location';
    headerRow.appendChild(location)
    for (let i = 0; i < timeHours.length; i++){

        let headerData = document.createElement('th');
        headerData.textContent = timeHours[i];
        headerRow.appendChild(headerData);

    }
    let headerData = document.createElement('th');
    headerData.textContent = 'Daily Total';
    headerRow.appendChild(headerData);
    makeTableBody();
    makeFooter();
}

function makeTableBody(){
    for (let i = 0; i < allCities.length; i++) {
        let cityDailyTotal = 0
        let storeRow = document.createElement('tr');
        let locationCell = document.createElement('td');
        locationCell.textContent = allCities[i].cityName;
        storeRow.appendChild(locationCell);
        tableEl.appendChild(storeRow);
        allCities[i].getCookPerCust()
        console.log(allCities[i].cookiePerCust);
   
        for ( let j = 0; j < allCities[i].cookiePerCust.length; j++) {
            let storeTd = document.createElement('td');
            storeTd.textContent = allCities[i].cookiePerCust[j];
            storeRow.appendChild(storeTd);
            cityDailyTotal += allCities[i].cookiePerCust[j];
        }
        let storeTd = document.createElement('td');
        storeTd.textContent = cityDailyTotal
        storeRow.appendChild(storeTd);


       
        

    }
}  
 function makeFooter(){
    let footerRow = document.createElement('tr');
    tableEl.appendChild(footerRow);
    let footerName = document.createElement('th');
    footerName.textContent = 'Hourly Total';
    footerRow.appendChild(footerName);
    //loop through hours
    //for each hour establish an hourly total variable
    //nested loop through locations allCities
    //add the total cookies per customer hour to that hourly variable
    //create a cell and make the text content the hourly total
    //append it to the footer row
    let grandTotal = 0
    for(let i = 0; i < timeHours.length; i++){
        let hourlyTotal = 0
        for(let j = 0; j < allCities.length; j++){
            hourlyTotal += allCities[j].cookiePerCust[i]
        }
        let hourlyData = document.createElement('th');
        hourlyData.textContent = hourlyTotal
        footerRow.appendChild(hourlyData);
        grandTotal += hourlyTotal
    }
    let grandTotalData = document.createElement('th');
    grandTotalData.textContent = grandTotal
    footerRow.appendChild(grandTotalData);
 }


 function custHr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let allCities = [];

function City(name, minCust, maxCust, averageCookies, allCustHr, cookiePerCust, total) {

    this.cityName = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookies = averageCookies;
    this.allCustHr = allCustHr;
    this.cookiePerCust = cookiePerCust;
    this.total = total
}
 let seattle = new City('Seattle', 23, 65, 6.3, [], [], 0);

 let tokyo = new City('Tokyo', 3, 24, 1.2, [], [], 0);
 
 let dubai = new City('Dubai', 11, 38, 3.7, [], [], 0);

 let paris = new City('Paris', 20, 38, 2.3, [], [], 0);

 let lima = new City('Lima', 2, 16, 4.6, [], [], 0);

allCities.push(seattle, tokyo, dubai, paris, lima);
console.log(allCities);

City.prototype.getCustHr = function() {
    for (let i = 0; i < timeHours.length; i++) {
        let randomCustHr = custHr(this.minCust, this.maxCust)
        this.allCustHr.push(randomCustHr);
    }
}
City.prototype.getCookPerCust = function() {
        this.getCustHr();
    for(let i=0; i< timeHours.length; i++){
        let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
        this.cookiePerCust.push(cookies)
        this.total += cookies;
    }
    }
   
 renderHeader();