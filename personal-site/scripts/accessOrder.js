// Display Order Details from Local Storage
const orderedDrinks = document.querySelector("#orderedDrinks");
function getOrderDictionary() {
    let orderDictionary = localStorage.getItem('orderList');

    if (orderDictionary) {
        let orderData = JSON.parse(orderDictionary);
        orderedDrinks.textContent = orderData.length;
    } else {
        orderedDrinks.textContent = 0;
    }
}

getOrderDictionary()