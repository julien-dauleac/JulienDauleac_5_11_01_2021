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
if (sendLocalStorage === null || sendLocalStorage === 0) {
    document.getElementsByClassName('container-panier-vide').innerHTML = ''
} else { sendLocalStorage.forEach(sendLocalStorage =>{
    let productsBasket = new Product (sendLocalStorage.picture, sendLocalStorage.name, sendLocalStorage.price, sendLocalStorage.lenses, sendLocalStorage.quantity)
    basket.push(productsBasket);
})}
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

let deleteButton = document.querySelectorAll(".delete");

for (let l = 0; l < deleteButton.length; l++){
    deleteButton[l].addEventListener('click' , (event) =>{
        event.preventDefault();
        let productSelectionDelete = sendLocalStorage[l];
        sendLocalStorage = sendLocalStorage.filter(el => el.lenses !== productSelectionDelete.lenses || el._id !== productSelectionDelete._id);
        localStorage.setItem("product", JSON.stringify(sendLocalStorage));
        alert("Ce produit a bien été supprimer du panier");
        window.location.href = "panier.html";
    })
}

// Bouton pour vider le panier //

let buttonDeleteBasket = document.querySelector(".btn_delete_basket");
if (sendLocalStorage === null || sendLocalStorage === 0) {

} else {
    buttonDeleteBasket.innerHTML = `
<td class="w-20 align-middle"><a class="btn btn-info delete_basket">Vider le panier</a></td>
`;}

// Suppression de la key produit dans le local storage pour vider le panier //

buttonDeleteBasket.addEventListener('click', (e)=>{
    e.preventDefault();
    // Méthode .removeItem //
    localStorage.removeItem('product');
    alert("Le panier a bien été vidé");
    window.location.href = "panier.html";
});

// Parcourir le panier pour les _id //

let _idBasket = [];

// Fonction du prix total du panier //

let totalBasket = [];
if (sendLocalStorage === null || sendLocalStorage === 0) {

} else {
    for (let n = 0; n < sendLocalStorage.length; n++){
        let priceBasket = sendLocalStorage[n].price * sendLocalStorage[n].quantity;
        totalBasket.push(priceBasket)
        for (let i = 0; i < sendLocalStorage[n].quantity; i++){
            _idBasket.push(sendLocalStorage[n]._id)
        }
    }}

// Addition des prix des articles du panier avec la méthode .reducer //

const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalBaskets = totalBasket.reduce(reducer,0);

// Code HTML du "afficher total" //

let priceHtml = document.querySelector(".cart_price");
priceHtml.innerHTML = `
 <td class ="w-25 align-middle"> Le prix total est de : ${totalBaskets} € </td>
`;
localStorage.setItem("totalBasket", JSON.stringify(totalBaskets))

// Formulaire à envoyer a l'API + Gestion de la validation du formulaire //

let fName = document.getElementById("firstname");
if (/^[A-Za-z]{3,20}$/.test(fName)) {
} else {
}

let lName = document.getElementById("lastname");
if (/^[A-Za-z]$/.test(lName)) {
} else {
}

let address = document.getElementById("address");

let ville = document.getElementById("city");
if (/^[A-Za-z]$/.test(ville)) {
} else {
}

let eMail = document.getElementById("email");

// Evenement de soumission ( addeventlistener (onsubmit)) fetch post /order //

let form = document.getElementsByClassName('needs-validation')[0];
if(sendLocalStorage === null || sendLocalStorage === 0){
    form.innerHTML = ``
} else {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.classList.add('was-validated');
        if (form.checkValidity()){
            let contact = {
                firstName: fName.value,
                lastName: lName.value,
                address: address.value,
                city: ville.value,
                email: eMail.value
            }
            let table = {
                contact: contact,
                products: _idBasket
            }
            fetch('http://localhost:3000/api/cameras/order', {
                method: "POST",
                body: JSON.stringify(table),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => response.json()).then(json => {
                localStorage.setItem("returnAPI", JSON.stringify(json))
                //window.location.href = "confirmation.html";
            })
                .catch(error =>{console.log(error);})
        }
    });}


