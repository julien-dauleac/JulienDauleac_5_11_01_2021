let params = new URLSearchParams(window.location.search);
let orderId = params.get('orderId');
let priceTotal = params.get('totalBasket');
console.log(orderId);
console.log(priceTotal);
