'use strict'

let seattleSales = document.getElementById('seattle');
// console.log(cookieElem);
let timeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function custHr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let seattle = {
    cityName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    averageCookies: 6.3,
    allCustHr: [],
    cookiePerCust: [],
    total: 0,
    getCustHr: function() {
    for(let i=0; i< timeHours.length; i++){ 
        let randomCustHr = custHr(this.minCust, this.maxCust)
        this.allCustHr.push(randomCustHr);
    }
},
    getCookPerCust: function() {
        this.getCustHr();
    for(let i=0; i< timeHours.length; i++){
        let cookies = Math.floor(this.allCustHr[i] * this.averageCookies)
        this.cookiePerCust.push(cookies)
        this.total += cookies;
    }
    },
    render: function(){
        this.getCookPerCust();
        console.log('render function.called');
        let cityName = document.createElement('h3');
        cityName.textContent = this.cityName;
        seattleSales.appendChild(cityName)
        let ul = document.createElement('ul');
        seattleSales.appendChild(ul);

        for(let i = 0; i < timeHours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${timeHours[i]} ${this.cookiePerCust[i]}`;
            ul.appendChild(li);


        }
        let li = document.createElement('li');
        li.textContent = `total: ${this.total}`;
        ul.appendChild(li);
    }
}
   


seattle.render();
console.log(seattle.cookiePerCust);
console.log(seattle.total);





