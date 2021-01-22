let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();

function Product(picture,name,price){
    this.picture = picture;
    this.name = name;
    this.price = price;
}
let products = [];
 const productOne = new Product('http://localhost:3000/images/vcam_1.jpg','Zurss 50S',49900);
 const productTwo = new Product('http://localhost:3000/images/vcam_2.jpg','Hirsch 400DTS',309900);
 const productThree = new Product('http://localhost:3000/images/vcam_3.jpg','Franck JS 105',209900);
 const productFour = new Product('http://localhost:3000/images/vcam_4.jpg','Kuros TTS',159900);
 const productFive = new Product('http://localhost:3000/images/vcam_5.jpg','Katatone',59900);
products.push(productOne,productTwo,productThree,productFour,productFive);

function populateTableList() {
    let listOfProducts = '';
    products.forEach(prod =>
        listOfProducts += `
        <tr class="text-center">
        <td><img src=${prod.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle"><button class="btn btn-info">Plus de détails</button></td>
        `
    )
    document.getElementById('productList').innerHTML = listOfProducts
}