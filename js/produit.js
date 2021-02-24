

function Product(picture, name, price, description, lenses){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.description = description;
    this.lenses = lenses;
}
// Injecter html dans la page produit //

let selectProduct = document.querySelector(".product_selection");

// Call Ajax //
let products = [];
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let camera = JSON.parse(this.responseText);
        let params = new URLSearchParams(window.location.search);
        let id = params.get('id');
        let idSelection = camera.find((element) => element._id === id);
        let productCamera = new Product (idSelection.imageUrl, idSelection.name, idSelection.price, idSelection.description, idSelection.lenses)
        products.push(productCamera);
        console.log(productCamera)
        selectProduct.innerHTML = `
 <div class="page_product">
    <div class="product_picture">
    <img src="${idSelection.imageUrl}"  alt="" class="img_product"/>
    </div>
    <div class="product">
    <ul>
    <li> Nom du produit : <span>${idSelection.name}</span></li>
    <li> Description : <span>${idSelection.description}</span></li>
    <li> Lentilles : <span>${idSelection.lenses}</span></li>
    <li> Prix : <span>${idSelection.price/100}€</span></li>
    </ul>
    <form>
     <label for="option_produit">Choisir l'option de lentilles : </label>
     <select name="option_produit" id="option_produit">
     </select>
    </form>
    <form>
     <label for="number_produit">Choisir la quantitée : </label>
     <select name="number_produit" id="number_produit">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     </select>
    </form>
    <button id="btn_send" type="submit" name="btn_send">Ajouter l'article au panier</button>
    </div>
    </div>
`;
        let selectOptions = document.querySelector("#option_produit");
        let options = idSelection.lenses;
        for (let i = 0; i < options.length; i++) {
            selectOptions.innerHTML += `
            <option value="${options[i]}">${options[i]}</option>
            `;
        }
        let numberProduct = document.querySelector("#number_produit");
        let sendBasket = document.querySelector("#btn_send");
        sendBasket.addEventListener("click", (event)=>{
            event.preventDefault()
            let productBasket = {
                picture: idSelection.imageUrl,
                name: idSelection.name,
                _id: idSelection._id,
                lenses: selectOptions.value,
                quantity: Number(numberProduct.value),
                price: idSelection.price /100
            }
            console.log(productBasket);
            let sendLocalStorage = JSON.parse(localStorage.getItem("product"));
            let popupConfirmation = () =>{
                if(window.confirm(`${idSelection.name} option: ${idSelection.options} a bien été ajouté au panier
            Consultez le panier OK ou revenir a l'accueil ANNULER`)){
                    window.location.href = "panier.html";
                }else{
                    window.location.href = "index.html";
                }
            }
            if(sendLocalStorage){
                let alreadyInBasket = false;
                sendLocalStorage.forEach(product => {
                    if(product._id === productBasket._id && product.lenses === productBasket.lenses){
                        product.quantity += productBasket.quantity;
                        alreadyInBasket = true;
                    }
                })
                if(!alreadyInBasket){
                   sendLocalStorage.push(productBasket);
                }
                localStorage.setItem("product", JSON.stringify(sendLocalStorage));
                popupConfirmation();
            }
            else {
                sendLocalStorage = [];
                sendLocalStorage.push(productBasket);
                localStorage.setItem("product", JSON.stringify(sendLocalStorage));
                popupConfirmation();
            }
        });
    }
};
request.open("GET", 'http://localhost:3000/api/cameras/');
request.send();