function Product(picture, name, price, lenses, quantity){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.lenses = lenses;
    this.quantity = quantity;
}

// Récupération des éléments pour le panier //

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
    delete_btn[l].addEventListener("click" , (event) =>{
        event.preventDefault();
    let productSelectionDelete = sendLocalStorage[l].lenses;
    sendLocalStorage = sendLocalStorage.filter(el => el.lenses !== productSelectionDelete);
    localStorage.setItem("product", JSON.stringify(sendLocalStorage));
    alert("Ce produit a bien été supprimer du panier");
    window.location.href = "panier.html";
    })
}

// Tableau du total du panier //



// Fonction du prix total du panier //



// Tableau de renvoi API //

let fName = document.getElementById("firstname");
let lName = document.getElementById("lastname");
let address = document.getElementById("address");
let ville = document.getElementById("city");
let eMail = document.getElementById("email");

let _idBasket = document.querySelector("#allBasket");
for (let m = 0; m < _idBasket.length; m++){

} // Parcourir le panier pour écrire les _id //

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
        let table =
            {
                contacts: contact,
                products: _idBasket
            }
        fetch('http://localhost:3000/api/cameras/order', {
            method: "POST",
            body: JSON.stringify(table)
        }).then(response => response.json()).then(json => console.log(json))
    if (form.checkValidity() === false) {
    event.stopPropagation();
}
    form.classList.add('was-validated');
}, false);
});
}, false);
})();

