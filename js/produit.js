function Product(picture, name, price, description, lenses){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.description = description;
    this.lenses = lenses;
}
let productDescription = [];
const productOneDescription = new Product('http://localhost:3000/images/vcam_1.jpg','Zurss 50S',49900,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ['35mm 1.4, 50mm 1.6']);
const productTwoDescription = new Product('http://localhost:3000/images/vcam_2.jpg','Hirsch 400DTS',309900,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ['50mm 1.8", 60mm 2.8", 24-60mm 2.8/4.5']);
const productThreeDescription = new Product('http://localhost:3000/images/vcam_3.jpg','Franck JS 105',209900,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ['25mm 4.5']);
const productFourDescription = new Product('http://localhost:3000/images/vcam_4.jpg','Kuros TTS',159900,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ['50mm 1.7", 35mm 1.4']);
const productFiveDescription = new Product('http://localhost:3000/images/vcam_5.jpg','Katatone',59900,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ['50mm 1.4", 35mm 1.8", 28-200mm 2.8/4.5']);
productDescription.push(productOneDescription,productTwoDescription,productThreeDescription,productFourDescription,productFiveDescription);

function populateTableList() {
    let ProductOfDescription = '';
    productDescription.forEach(prod =>
        ProductOfDescription += `
        <tr class="text-center">
        <td><img src=${prod.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-25 align-middle">${prod.lenses}</td>
        <td class="w-25 align-middle"><button class="btn btn-info">Validé</button></td>
        `
    )
    document.getElementById('productOfDescription').innerHTML = ProductOfDescription
}

function Lien() {
    i = document.Choix.Liste.selectedIndex;
    if (i === 0) return;
    url = document.Choix.Liste.options[i].value;
    parent.location.href = url;
}