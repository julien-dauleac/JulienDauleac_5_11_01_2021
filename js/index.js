function Product(picture, name, price, id){
    this.picture = picture;
    this.name = name;
    this.price = price;
    this.id = id;
}
let products = [];
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let cameras = JSON.parse(this.responseText);
        console.log(cameras);
        cameras.forEach(camera =>{
            let productCamera = new Product (camera.imageUrl, camera.name, camera.price, camera._id)
            products.push(productCamera);
        })
        populateTableList()
    }
};
request.open("GET", 'http://localhost:3000/api/cameras');
request.send();

function populateTableList() {
    let listOfProducts = '';
    products.forEach(prod =>
        listOfProducts += `
        <tr class="text-center">
        <td><img src=${prod.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price/100}€</td>
        <td class="w-25 align-middle"><a href="produit.html?id=${prod.id}" class="btn btn-info">Details</a></td>
        `
    )
    document.getElementById('products').innerHTML = listOfProducts
}