'use strict'

let tableEl = document.getElementById('tableEl')
let seattleSales = document.getElementById('seattle');

let timeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function renderHeader(){
    let headerRow = document.createElement('tr');
    tableEl.appendChild(headerRow);
    for (let i = 0; i < timeHours.length; i++){

        let headerData = document.createElement('th');
        headerData.textContent = timeHours[i];
        headerRow.appendChild(headerData);
    }


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

 let tokyo = new City('tokyo', 3, 24, 1.2, [], [], 0);
 
 let dubai = new City('Dubai', 11, 38, 3.7, [], [], 0);

 let paris = new City('Paris', 20, 38, 2.3, [], [], 0);

 let lima = new City('Lima', 2, 16, 4.6, [], [], 0);

 
renderHeader();
 
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
    City.prototype.render = function(){
    this.getCookPerCust();
        console.log('render function.called');
        let cityName = document.createElement('h3');
        cityName.textContent = this.cityName;
        seattleSales.appendChild(cityName)
        let ul = document.createElement('ul');
        seattleSales.appendChild(ul);

        for(let i = 0; i < timeHours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
            ul.appendChild(li);


        }
        let li = document.createElement('li');
        li.textContent = `total: ${this.total} cookies`;
        ul.appendChild(li);
    }
 seattle.render();
 console.log(dubai);
 console.log(tokyo);
 console.log(paris);
 console.log(lima);


// let seattle = {
//     cityName: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     averageCookies: 6.3,
//     allCustHr: [],
//     cookiePerCust: [],
//     total: 0,
//     getCustHr: function() {
//     for(let i=0; i< timeHours.length; i++){ 
//         let randomCustHr = custHr(this.minCust, this.maxCust)
//         this.allCustHr.push(randomCustHr);
//     }
// },
//     getCookPerCust: function() {
//         this.getCustHr();
//     for(let i=0; i< timeHours.length; i++){
//         let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
//         this.cookiePerCust.push(cookies)
//         this.total += cookies;
//     }
//     },
//     render: function(){
//         this.getCookPerCust();
//         console.log('render function.called');
//         let cityName = document.createElement('h3');
//         cityName.textContent = this.cityName;
//         seattleSales.appendChild(cityName)
//         let ul = document.createElement('ul');
//         seattleSales.appendChild(ul);

//         for(let i = 0; i < timeHours.length; i++){
//             let li = document.createElement('li');
//             li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
//             ul.appendChild(li);


//         }
//         let li = document.createElement('li');
//         li.textContent = `total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }
// }
   


// seattle.render();
// console.log(seattle.cookiePerCust);
// console.log(seattle.total);

// let tokyoSales = document.getElementById('tokyo');


// function custHr(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let tokyo = {
//     cityName: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     averageCookies: 1.2,
//     allCustHr: [],
//     cookiePerCust: [],
//     total: 0,
//     getCustHr: function () {
//         for (let i = 0; i < timeHours.length; i++) {
//             let randomCustHr = custHr(this.minCust, this.maxCust)
//             this.allCustHr.push(randomCustHr);
//         }
//     },
//     getCookPerCust: function () {
//         this.getCustHr();
//         for (let i = 0; i < timeHours.length; i++) {
//             let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
//             this.cookiePerCust.push(cookies)
//             this.total += cookies;
//         }
//     },
//     render: function () {
//         this.getCookPerCust();
//         console.log('render function.called');
//         let cityName = document.createElement('h3');
//         cityName.textContent = this.cityName;
//         tokyoSales.appendChild(cityName)
//         let ul = document.createElement('ul');
//         tokyoSales.appendChild(ul);

//         for (let i = 0; i < timeHours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
//             ul.appendChild(li);


//         }
//         let li = document.createElement('li');
//         li.textContent = `total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }

// }
// tokyo.render();
// console.log(tokyo.cookiePerCust);
// console.log(tokyo.total);

// let dubaiSales = document.getElementById('dubai');


// function custHr(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let dubai = {
//     cityName: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     averageCookies: 3.7,
//     allCustHr: [],
//     cookiePerCust: [],
//     total: 0,
//     getCustHr: function () {
//         for (let i = 0; i < timeHours.length; i++) {
//             let randomCustHr = custHr(this.minCust, this.maxCust)
//             this.allCustHr.push(randomCustHr);
//         }
//     },
//     getCookPerCust: function () {
//         this.getCustHr();
//         for (let i = 0; i < timeHours.length; i++) {
//             let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
//             this.cookiePerCust.push(cookies)
//             this.total += cookies;
//         }
//     },
//     render: function () {
//         this.getCookPerCust();
//         console.log('render function.called');
//         let cityName = document.createElement('h3');
//         cityName.textContent = this.cityName;
//         dubaiSales.appendChild(cityName)
//         let ul = document.createElement('ul');
//         dubaiSales.appendChild(ul);

//         for (let i = 0; i < timeHours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
//             ul.appendChild(li);


//         }
//         let li = document.createElement('li');
//         li.textContent = `total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }

// }
// dubai.render();
// console.log(dubai.cookiePerCust);
// console.log(dubai.total);

// let parisSales = document.getElementById('paris');


// function custHr(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let paris = {
//     cityName: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     averageCookies: 2.3,
//     allCustHr: [],
//     cookiePerCust: [],
//     total: 0,
//     getCustHr: function () {
//         for (let i = 0; i < timeHours.length; i++) {
//             let randomCustHr = custHr(this.minCust, this.maxCust)
//             this.allCustHr.push(randomCustHr);
//         }
//     },
//     getCookPerCust: function () {
//         this.getCustHr();
//         for (let i = 0; i < timeHours.length; i++) {
//             let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
//             this.cookiePerCust.push(cookies)
//             this.total += cookies;
//         }
//     },
//     render: function () {
//         this.getCookPerCust();
//         console.log('render function.called');
//         let cityName = document.createElement('h3');
//         cityName.textContent = this.cityName;
//         parisSales.appendChild(cityName)
//         let ul = document.createElement('ul');
//         parisSales.appendChild(ul);

//         for (let i = 0; i < timeHours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
//             ul.appendChild(li);


//         }
//         let li = document.createElement('li');
//         li.textContent = `total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }

// }
// paris.render();
// console.log(paris.cookiePerCust);
// console.log(paris.total);

// let limaSales = document.getElementById('lima');


// function custHr(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let lima = {
//     cityName: 'Lima',
//     minCust: 20,
//     maxCust: 38,
//     averageCookies: 2.3,
//     allCustHr: [],
//     cookiePerCust: [],
//     total: 0,
//     getCustHr: function () {
//         for (let i = 0; i < timeHours.length; i++) {
//             let randomCustHr = custHr(this.minCust, this.maxCust)
//             this.allCustHr.push(randomCustHr);
//         }
//     },
//     getCookPerCust: function () {
//         this.getCustHr();
//         for (let i = 0; i < timeHours.length; i++) {
//             let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
//             this.cookiePerCust.push(cookies)
//             this.total += cookies;
//         }
//     },
//     render: function () {
//         this.getCookPerCust();
//         console.log('render function.called');
//         let cityName = document.createElement('h3');
//         cityName.textContent = this.cityName;
//         limaSales.appendChild(cityName)
//         let ul = document.createElement('ul');
//         limaSales.appendChild(ul);

//         for (let i = 0; i < timeHours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]} cookies`;
//             ul.appendChild(li);


//         }
//         let li = document.createElement('li');
//         li.textContent = `total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }

// }
// lima.render();
// console.log(lima.cookiePerCust);
// console.log(lima.total);