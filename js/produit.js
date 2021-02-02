function Product(picture, name, price, description, lenses){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.description = description;
    this.lenses = lenses;
}
let products = [];
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        let camera = JSON.parse(this.responseText);
        let params = new URLSearchParams(window.location.search);
        let id = params.get('id');
        let idSelection = camera.find((element) => element._id === id);
        console.log(idSelection)
        let productCamera = new Product (camera.imageUrl, camera.name, camera.price, camera.description, camera.lenses)
        products.push(productCamera);
        populateTableList()
    }
};
request.open("GET", 'http://localhost:3000/api/cameras/');
request.send();

function populateTableList() {
    let productOfDescription = '';
    products.forEach(camera =>
        productOfDescription += `
        <tr class="text-center">
        <td><img src=${camera.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-20 align-middle">${camera.name}</td>
        <td class="w-15 align-middle">${camera.price/100}€</td>
        <td class="w-25 align-middle">${camera.description}</td>
        <td class="w-15 align-middle"><form name="lenses">
                    <label>
                        <select name="list" onChange="Lien()">
                            <option value="#">Choisir une option de lentille
                            <option value="#">${camera.lenses}
                            <option value="#">${camera.lenses}
                            <option value="#">${camera.lenses}
                        </select>
                    </label>
                </form></td>
        <td class="w-25 align-middle"><form name="amount">
                    <label>
                        <select name="list" onChange="Lien()">
                            <option value="#">Choisir la quantité
                            <option value="#">1
                            <option value="#">2
                            <option value="#">3
                            <option value="#">4
                            <option value="#">5
                        </select>
                    </label>
                </form></td>
        <td class="w-15 align-middle"><a href="panier.html" class="btn btn-info">Validé</a></td>
        `
    )
    document.getElementById('productOfDescription').innerHTML = productOfDescription
}