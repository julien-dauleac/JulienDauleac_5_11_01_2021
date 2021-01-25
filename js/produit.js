function Product(picture, name, price, description, lenses, amount){
    this.picture = picture;
    this.price = price;
    this.name = name;
    this.description = description;
    this.lenses = lenses;
    this.amount = amount;
}
let productDescription = [];
productDescription.push(Product);

function populateTableList() {
    let ProductOfDescription = '';
    productDescription.forEach(prod =>
        ProductOfDescription += `
        <tr class="text-center">
        <td><img src=${prod.picture} alt="" class="img-fluide img-thumbnail"></td>
        <td class="w-20 align-middle">${prod.name}</td>
        <td class="w-15 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-15 align-middle"><form name="lenses">
                    <label>
                        <select name="list" onChange="Lien()">
                            <option value="#">Choisir une option de lentille
                            <option value="#">${prod.lenses}
                            <option value="#">${prod.lenses}
                            <option value="#">${prod.lenses}
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
    document.getElementById('productOfDescription').innerHTML = ProductOfDescription
}

let urlSearchParams = URL.searchParams;

let params = (new URL(document.location)).searchParams;
let id = params.get('id');

populateTableList()