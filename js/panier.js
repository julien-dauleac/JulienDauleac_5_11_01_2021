function Product(picture, name, price, lenses, quantity){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.lenses = lenses;
    this.quantity = quantity;
}

// Call Ajax //

let basket = [];
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let sendLocalStorage = JSON.parse(localStorage.getItem("product"));
        sendLocalStorage.forEach(sendLocalStorage =>{
            let productsBasket = new Product (sendLocalStorage.picture, sendLocalStorage.name, sendLocalStorage.price, sendLocalStorage.lenses, sendLocalStorage.quantity)
            basket.push(productsBasket);
        })
        basketList()
    }
};
request.open("GET", 'http://localhost:3000/api/cameras/');
request.send();

// Tableau des articles dans le panier //

function basketList() {
    let productBasket = '';
    basket.forEach(cameras =>
        productBasket += `
        <tr class="text-center">
        <td><img src=${cameras.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-20 align-middle">${cameras.name}</td>
        <td class="w-15 align-middle">${cameras.price}€</td>
        <td class="w-15 align-middle">${cameras.lenses}</td>
        <td class="w-15 align-middle">${cameras.quantity}</td>
        <td class="w-15 align-middle"><a onclick="deleteRow(this); return false;" href="panier.html" class="btn btn-delete">Supprimer l'article</a></td>
        `
    )
    document.getElementById('allBasket').innerHTML = productBasket
}

// Evenement de suppression de ligne dans le tableau //

let deleteRow = function (link) {
    let row = link.parentNode.parentNode;
    let table = row.parentNode;
    table.removeChild(row);
}

// Tableau du total du panier //



// Fonction du prix total du panier //



// Tableau de renvoi API //

let contact = {
    firstName: fName.value,
    lastName: lName.value,
    address: address.value,
    city: ville.value,
    emailAddress: eMail.value
}

let products = ["_id"];

{
    contact: contact;
    products: products;
}

// Evenement de soumission ( addeventlistener (onsubmit)) //
let fName = document.getElementById("firstname");
let lName = document.getElementById("lastname");
let address = document.getElementById("address");
let ville = document.getElementById("city");
let eMail = document.getElementById("email");
let validation = document.getElementById('bouton');
let fNameM = document.getElementById('fNameM');
let fNameV = /^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a-z]+)?/;
validation.addEventListener('click', fValid);

function fValid(e){
    if (fName.validity.valueMissing) {
        e.preventDefault();
        fNameM.textContent = 'Prenom manquant';
        fNameM.style.color = 'red';
    }else if (fNameV.test(fName.value) === false) {
        e.preventDefault();
        fNameM.textContent = 'Format incorrect';
        fNameM.style.color = 'orange';
    }else{

    }
}

