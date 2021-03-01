for (let l = 0; l < deleteRow.length; l++) {
    let productSelectionDelete = productBasket[l]._id;
    productBasket = productBasket.filter((el) => el._id !== productSelectionDelete);
    localStorage.setItem("product", JSON.stringify(productBasket));
}

let deleteRow = function (link) {
    let row = link.parentNode.parentNode;
    let table = row.parentNode;
    table.removeChild(row);
}

onclick="deleteRow(this); return false;"