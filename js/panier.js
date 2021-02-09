function Product(picture, name, price, lenses, quantity, total){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.lenses = lenses;
    this.quantity = quantity;
    this.total = total;
}

// Call Ajax //

let basket = [];
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let cameras = JSON.parse(this.responseText);
        console.log(cameras);
        cameras.forEach(cameras =>{
            let productBasket = new Product (cameras.imageUrl, cameras.name, cameras.price, cameras.lenses, cameras.quantity, cameras.total)
            basket.push(productBasket);
        })
        populateTableList()
    }
};
request.open("GET", 'http://localhost:3000/api/cameras/');
request.send();

// Tableau des articles //

function populateTableList() {
    let productBasket = '';
    basket.forEach(camera =>
        productBasket += `
        <tr class="text-center">
        <td><img src=${camera.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-20 align-middle">${camera.name}</td>
        <td class="w-15 align-middle">${camera.price/100}€</td>
        <td class="w-15 align-middle">${camera.lenses}</td>
        <td class="w-15 align-middle">${camera.quantity}</td>
        <td class="w-15 align-middle">${camera.total}</td>
        <td class="w-15 align-middle"><a href="commande.html" class="btn btn-info">Validé</a></td>
        `
    )
    document.getElementById('productBasket').innerHTML = productBasket
}

// Formulaire Client //
