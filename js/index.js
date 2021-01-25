let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();

function Product(picture,name,price, id){
    this.picture = picture;
    this.name = name;
    this.price = price;
    this.id = id;
}
let products = [];
 const productOne = new Product('http://localhost:3000/images/vcam_1.jpg','Zurss 50S',49900,'5be1ed3f1c9d44000030b061');
 const productTwo = new Product('http://localhost:3000/images/vcam_2.jpg','Hirsch 400DTS',309900,"5be1ef211c9d44000030b062");
 const productThree = new Product('http://localhost:3000/images/vcam_3.jpg','Franck JS 105',209900,"5be9bc241c9d440000a730e7");
 const productFour = new Product('http://localhost:3000/images/vcam_4.jpg','Kuros TTS',159900,"5be9c4471c9d440000a730e8");
 const productFive = new Product('http://localhost:3000/images/vcam_5.jpg','Katatone',59900,"5be9c4c71c9d440000a730e9");
products.push(productOne,productTwo,productThree,productFour,productFive);

function populateTableList() {
    let listOfProducts = '';
    products.forEach(prod =>
        listOfProducts += `
        <tr class="text-center">
        <td><img src=${prod.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle"><a href="produit.html?id=${prod.id}" class="btn btn-info">Details</a></td>
        `
    )
    document.getElementById('productList').innerHTML = listOfProducts
}

populateTableList()