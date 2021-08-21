
function totalPrice(){
    const
}
function addPrices(amount, ids) {
    // getPrices(ids);
    const priceText = document.getElementById(ids);
    const priceValue = parseInt(priceText.innerText);
    const setPrice = 1 * amount;
    priceText.innerText = setPrice;
}


document.getElementById('8gb-memory').addEventListener('click', function () {
    const amount = 0;
    const ids = 'extra-memory-cost';
    addPrices(amount, ids);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    const amount = 180;
    const ids = 'extra-memory-cost';
    addPrices(amount, ids);
});
document.getElementById('256gb-storage').addEventListener('click', function () {
    const amount = 0;
    const ids = 'extra-storage-cost';
    addPrices(amount, ids);
});
document.getElementById('512gb-storage').addEventListener('click', function () {
    const amount = 100;
    const ids = 'extra-storage-cost';
    addPrices(amount, ids);
});
document.getElementById('1tb-storage').addEventListener('click', function () {
    const amount = 180;
    const ids = 'extra-storage-cost';
    addPrices(amount, ids);
});
document.getElementById('free-delivery').addEventListener('click', function () {
    const amount = 0;
    const ids = 'delivery-cost';
    addPrices(amount, ids);
});
document.getElementById('costly-delivery').addEventListener('click', function () {
    const amount = 20;
    const ids = 'delivery-cost';
    addPrices(amount, ids);
});