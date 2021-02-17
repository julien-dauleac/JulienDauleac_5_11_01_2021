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
    let removeItem = localStorage.removeItem("product");
    let productBasket = '';
    basket.forEach(cameras =>
        productBasket += `
        <tr class="text-center">
        <td><img src=${cameras.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-20 align-middle">${cameras.name}</td>
        <td class="w-15 align-middle">${cameras.price}€</td>
        <td class="w-15 align-middle">${cameras.lenses}</td>
        <td class="w-15 align-middle">${cameras.quantity}</td>
        <td class="w-15 align-middle">${removeItem}<a href="panier.html" class="btn btn-delete">Supprimer</a></td>
        `
    )
    document.getElementById('allBasket').innerHTML = productBasket
}

// Formulaire Client //

let customerForm = document.querySelector("#customer");
customerForm.innerHTML = `
        <label> Prénom
            <input class= "prenom" type="text" name="input" value="">
        </label>
        <label> Nom
            <input class= "nom" type="text" name="output" value="">
        </label>
        <label> Adresse
            <input class= "adresse" type="text" name="output" value="">
        </label>
        <label> Ville
            <input class= "ville" type="text" name="output" value="">
        </label>
        <label> Adresse éléctronique
            <input class= "email" type="text" name="output" value="adresse_electronique">
        </label>
        <input type="button" name="bouton" value="Valider">
`;
let prenom = document.querySelector(".prenom");
let nom = document.querySelector(".nom");
let adresse = document.querySelector(".adresse");
let ville = document.querySelector(".ville");
let adresseElectronique = document.querySelector(".email");

let contact = {
    firstName: prenom.value,
    lastName: nom.value,
    address: adresse.value,
    city: ville.value,
    emailAddress: adresseElectronique.value
}

let products = ["product"];

{
    contact: contact;
    products: products;
}