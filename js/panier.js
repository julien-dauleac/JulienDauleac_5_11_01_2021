function Product(picture, name, price, lenses, quantity, total){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.lenses = lenses;
    this.quantity = quantity;
    this.total = total;
}

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

function sendData(data) {
    let XHR = new XMLHttpRequest();
    let urlEncodedData = "";
    let urlEncodedDataPairs = [];
    let name;

    // Transformez l'objet data en un tableau de paires clé/valeur codées URL.
    for(name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    // Combinez les paires en une seule chaîne de caractères et remplacez tous
    // les espaces codés en % par le caractère'+' ; cela correspond au comportement
    // des soumissions de formulaires de navigateur.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Définissez ce qui se passe en cas de succès de soumission de données
    XHR.addEventListener('load', function(event) {
        alert('Données envoyées et réponse chargée.');
    });

    // Définissez ce qui arrive en cas d'erreur
    XHR.addEventListener('error', function(event) {
        alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurez la requête
    XHR.open('POST', 'http://localhost:3000/api/cameras/');

    // Ajoutez l'en-tête HTTP requise pour requêtes POST de données de formulaire
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finalement, envoyez les données.
    XHR.send(urlEncodedData);
}