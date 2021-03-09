// Fonction affichage des produits panier //

function Product(picture, name, price, lenses, quantity){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.lenses = lenses;
    this.quantity = quantity;
}

// Récupération des éléments du local storage pour le panier //

let basket = [];
let sendLocalStorage = JSON.parse(localStorage.getItem("product"));
  sendLocalStorage.forEach(sendLocalStorage =>{
    let productsBasket = new Product (sendLocalStorage.picture, sendLocalStorage.name, sendLocalStorage.price, sendLocalStorage.lenses, sendLocalStorage.quantity)
            basket.push(productsBasket);
        })
        basketList()

// Tableau des articles dans le panier //

function basketList() {
    let productBasket = '';
    basket.forEach(cameras =>
        productBasket += `
        <tr class="text-center">
        <td><img src=${cameras.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-25 align-middle">${cameras.name}</td>
        <td class="w-25 align-middle">${cameras.price}€</td>
        <td class="w-20 align-middle">${cameras.lenses}</td>
        <td class="w-20 align-middle">${cameras.quantity}</td>
        <td class="w-20 align-middle"><a class="btn btn-info delete">Supprimer l'article</a></td>
        `
    )
    document.getElementById('allBasket').innerHTML = productBasket
}

// Evenement de suppression de ligne dans le tableau //

let delete_btn = document.querySelectorAll(".delete");

for (let l = 0; l < delete_btn.length; l++){
    delete_btn[l].addEventListener('click' , (event) =>{
        event.preventDefault();
    let productSelectionDelete = sendLocalStorage[l];
    sendLocalStorage = sendLocalStorage.filter(el => el.lenses !== productSelectionDelete.lenses || el._id !== productSelectionDelete._id);
    localStorage.setItem("product", JSON.stringify(sendLocalStorage));
    alert("Ce produit a bien été supprimer du panier");
    window.location.href = "panier.html";
    })
}

// Bouton pour vider le panier //

let btnDeleteBasket = document.querySelector(".btn_delete_basket");
btnDeleteBasket.innerHTML = `
<td class="w-20 align-middle"><a class="btn btn-info delete_basket">Vider le panier</a></td>
`;

// Suppression de la key produit dans le local storage pour vider le panier //

btnDeleteBasket.addEventListener('click', (e)=>{
    e.preventDefault();
    // Méthode .removeItem //
    localStorage.removeItem('product');
    alert("Le panier a bien été vidé");
    window.location.href = "panier.html";
});

// Fonction du prix total du panier //

let totalBasket = [];
for (let n = 0; n < sendLocalStorage.length; n++){
    let priceBasket = sendLocalStorage[n].price * sendLocalStorage[n].quantity;
    totalBasket.push(priceBasket)
}

// Addition des prix des articles du panier avec la méthode .reducer //

const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalBaskets = totalBasket.reduce(reducer,0);

// Code HTML du "afficher total" //

let priceHtml = document.querySelector(".cart_price");
priceHtml.innerHTML = `
 <td class ="w-25 align-middle"> Le prix total est de : ${totalBaskets} € </td>
`;

// Tableau de renvoi API //

let fName = document.getElementById("firstname");
let lName = document.getElementById("lastname");
let address = document.getElementById("address");
let ville = document.getElementById("city");
let eMail = document.getElementById("email");

// Parcourir le panier pour les _id //

let _idBasket = document.querySelector("#allBasket");
for (let m = 0; m < _idBasket.length; m++){

}

// Evenement de soumission ( addeventlistener (onsubmit)) fetch post /order //

(function() {
    'use strict';
    window.addEventListener('load', function() {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    event.preventDefault();
        let contact = {
            firstName: fName.value,
            lastName: lName.value,
            address: address.value,
            city: ville.value,
            emailAddress: eMail.value
        }
        let table = {
                contacts: contact,
                products: _idBasket
            }
        fetch('http://localhost:3000/api/order', {
            method: "POST",
            body: JSON.stringify({table}),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async response => await response.json()).then(json => console.log(json))
          .catch(event)
           console.log(event);

    if (form.checkValidity() === false) {
    event.stopPropagation();
}
    form.classList.add('was-validated');
}, false);
});
}, false);
})();

