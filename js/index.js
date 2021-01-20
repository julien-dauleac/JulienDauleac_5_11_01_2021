let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();

let tab=[];
tab[0]='productOne';
tab[1]='productTwo';
tab[2]='productThree';
tab[3]='productFour';
tab[4]='productFive';
let longueur=tab.length;

function products(p) {
  console.log(tab)
}

console.table(tab);

const productOne = document.getElementById('5be1ef211c9d44000030b062');
const productTwo = document.getElementById('5be1ef211c9d44000030b062');
const productThree = document.getElementById('5be9bc241c9d440000a730e7');
const productFour = document.getElementById('5be9c4471c9d440000a730e8');
const productFive = document.getElementById('5be9c4c71c9d440000a730e9');