// Récupération des informations dans le local storage //

let returnApi = JSON.parse(localStorage.getItem('returnAPI'));
let priceTotal = localStorage.getItem('totalBasket');
console.log(returnApi);

// Injecteur le html dans la age confirmation //

let confirmation = document.querySelector(".confirmation");

confirmation.innerHTML = `
<h1> Merci de votre commande ! Au plaisir de vous retouver sur notre site !! </h1>
<p> Le total de votre commande est de : <strong> ${priceTotal}€ </strong></p>
<p> Le numéro de la commande est le : <strong> ${returnApi.orderId} </strong></p>
`
localStorage.clear();