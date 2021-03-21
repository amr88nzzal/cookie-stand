'use strict';
// Make time list//
let times=[];
for (let i=6;i<20;i++){
  if(i<12){
    times.push(`${i}am:`);
  }
  else if(i===12){
    times.push(`${i}pm:`);
  }
  else{
    times.push(`${i-12}pm:`);
  }
}
console.log(times);
//----------------------------------------//
// Function for Random Num //
function gitRandNum(max,mini) {
  return Math.floor(Math.random()*(max-mini+1)+mini);
}
//-----------------------------------------//

// Make Seattle location //
const Seattle = {
  locationName:'Seattle',
  max : 65,
  mini : 23,
  aveCookie : 6.3,
  salesCookies:function (maxx,minix) {
    let sales=[];
    let totSales=0;
    let randSales=0;
    for (let i=0;i<times.length;i++){
      randSales=Math.floor(gitRandNum(maxx,minix)*this.aveCookie);
      sales.push(`${times[i]} ${randSales} cookies`);
      totSales+=randSales;
    }
    sales.push(`Total:${totSales} Cookies`);
    return sales;
  },

  render: function(){
    let salesValue =this.salesCookies(this.max,this.mini);
    console.log(salesValue);
    const container = document.getElementById('Seattle');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locationName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i=0;i<salesValue.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=salesValue[i];
      if(i===salesValue.length-2){
        const hrEl = document.createElement('hr');
        ulEl.appendChild(hrEl);}
    }
  }
};
//-----------------------------------------------//
// Make Tokyo location //
const Tokyo = {
  locationName:'Tokyo',
  max : 24,
  mini : 3,
  aveCookie : 1.2,
  salesCookies:function (maxx,minix) {
    let sales=[];
    let totSales=0;
    let randSales=0;
    for (let i=0;i<times.length;i++){
      randSales=Math.floor(gitRandNum(maxx,minix)*this.aveCookie);
      sales.push(`${times[i]} ${randSales} cookies`);
      totSales+=randSales;
    }
    sales.push(`Total:${totSales} Cookies`);
    return sales;
  },

  render: function(){
    let salesValue =this.salesCookies(this.max,this.mini);
    console.log(salesValue);
    const container = document.getElementById('Tokyo');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locationName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i=0;i<salesValue.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=salesValue[i];
      if(i===salesValue.length-2){
        const hrEl = document.createElement('hr');
        ulEl.appendChild(hrEl);}
    }
  }
};
//-----------------------------------------------//
// Make Dubai location //
const Dubai = {
  locationName:'Dubai',
  max : 24,
  mini : 3,
  aveCookie : 3.7,
  salesCookies:function (maxx,minix) {
    let sales=[];
    let totSales=0;
    let randSales=0;
    for (let i=0;i<times.length;i++){
      randSales=Math.floor(gitRandNum(maxx,minix)*this.aveCookie);
      sales.push(`${times[i]} ${randSales} cookies`);
      totSales+=randSales;
    }
    sales.push(`Total:${totSales} Cookies`);
    return sales;
  },

  render: function(){
    let salesValue =this.salesCookies(this.max,this.mini);
    console.log(salesValue);
    const container = document.getElementById('Dubai');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locationName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i=0;i<salesValue.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=salesValue[i];
      if(i===salesValue.length-2){
        const hrEl = document.createElement('hr');
        ulEl.appendChild(hrEl);}
    }
  }
};
//-----------------------------------------------//
// Make Paris	location //
const Paris	 = {
  locationName:'Paris',
  max : 24,
  mini : 3,
  aveCookie : 2.3,
  salesCookies:function (maxx,minix) {
    let sales=[];
    let totSales=0;
    let randSales=0;
    for (let i=0;i<times.length;i++){
      randSales=Math.floor(gitRandNum(maxx,minix)*this.aveCookie);
      sales.push(`${times[i]} ${randSales} cookies`);
      totSales+=randSales;
    }
    sales.push(`Total:${totSales} Cookies`);
    return sales;
  },

  render: function(){
    let salesValue =this.salesCookies(this.max,this.mini);
    console.log(salesValue);
    const container = document.getElementById('Paris');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locationName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i=0;i<salesValue.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=salesValue[i];
      if(i===salesValue.length-2){
        const hrEl = document.createElement('hr');
        ulEl.appendChild(hrEl);}
    }
  }
};
//-----------------------------------------------//
// Make Lima location //
const Lima = {
  locationName:'Lima',
  max : 24,
  mini : 3,
  aveCookie : 4.6,
  salesCookies:function (maxx,minix) {
    let sales=[];
    let totSales=0;
    let randSales=0;
    for (let i=0;i<times.length;i++){
      randSales=Math.floor(gitRandNum(maxx,minix)*this.aveCookie);
      sales.push(`${times[i]} ${randSales} cookies`);
      totSales+=randSales;
    }
    sales.push(`Total:${totSales} Cookies`);
    return sales;
  },

  render: function(){
    let salesValue =this.salesCookies(this.max,this.mini);
    console.log(salesValue);
    const container = document.getElementById('Lima');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locationName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i=0;i<salesValue.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=salesValue[i];
      if(i===salesValue.length-2){
        const hrEl = document.createElement('hr');
        ulEl.appendChild(hrEl);}
    }
  }
};
//-----------------------------------------------//

//Invoke renders //
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
//-----------------------------------------------//
