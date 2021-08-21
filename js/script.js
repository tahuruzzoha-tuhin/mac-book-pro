
/**********************\
    FUNCTION FOR ID'S
\**********************/
function updateCost(id, amount) {
    const cost = document.getElementById(id + '-amount');
    const totalCost = cost.innerText = amount;
    return totalCost;
}

function getCost(id) {
    const cost = document.getElementById(id + '-amount').innerText;
    const totalCost = parseInt(cost);
    return totalCost;
}



/*****************************\
    FUNCTION FOR QUANTITY'S
\*****************************/
const totalPrice = document.getElementById('total-price');
const promoTotalPrice = document.getElementById('total');


function memoryQuantity(amount) {
    const totalMemoryAmount = updateCost('memory', amount);
    const totalStorageAmount = getCost('storage');
    deliveryAmount(totalMemoryAmount, totalStorageAmount);
}


function storageQuantity(amount) {
    const totalStorageAmount = updateCost('storage', amount);
    const totalMemoryAmount = getCost('memory');
    deliveryAmount(totalStorageAmount, totalMemoryAmount);
}


function deliveryQuantity(amount) {
    const totalDeliveryAmount = updateCost('delivery', amount);
    storageWithMemory(totalDeliveryAmount);
}






/**********************************\
    FUNCTION FOR DELIVERY AMOUNT
\**********************************/
function deliveryAmount(totalStorageAmount, totalMemoryAmount) {
    const totalDeliveryAmount = getCost('delivery');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    promoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}



/********************************\
    FUNCTION FOR COST COUNTING
\********************************/
function storageWithMemory(totalDeliveryAmount) {
    const totalMemoryAmount = getCost('memory');
    const totalStorageAmount = getCost('storage');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    promoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}



/*****************************\
    FUNCTION FOR PROMO CODE
\*****************************/
function UsePromoCode() {
    const totalDeliveryAmount = getCost('delivery');
    storageWithMemory(totalDeliveryAmount);

    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;



    if (promoCodeValue.toLowerCase() == 'stevekaku') {
        const getPromo = totalPrice.innerText * 0.2;
        const total = totalPrice.innerText - getPromo;
        document.getElementById('total').innerText = total;
        swal("Congratulations!", "You have got the discount successfully!", "success");

    }

    else if (promoCode.value == '') {
        swal("Warning!", "Please, input the promo code! This box should not be empty.", "warning");

    }
    else {

        swal("Warning!", "Wrong promo code! Please input the right one!", "error");
    }
    promoCode.value = '';
}



