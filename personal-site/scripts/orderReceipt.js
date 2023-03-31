// Add DOM objects
const nameSpan = document.querySelector("#nameSpan");
const emailSpan = document.querySelector("#emailSpan"); 
const phoneSpan = document.querySelector("#phoneSpan");
const fruitSpan = document.querySelector("#fruitSpan");

const carbSpan = document.querySelector("#carbSpan");
const proteinSpan = document.querySelector("#proteinSpan");
const fatSpan = document.querySelector("#fatSpan");
const sugarSpan = document.querySelector("#sugarSpan");
const caloriesSpan = document.querySelector("#caloriesSpan");

function displayOrderReceipt() {
    let orderList = JSON.parse(localStorage.getItem('orderList'));
    let fruitName = orderList[0].fruit;

    getFruitsApi(fruitName);

}

async function getFruitsApi() {
    try {
        const url = '../data/fruityvice.json';

        let response = await fetch(url);
        let orderList = JSON.parse(localStorage.getItem('orderList'));
        let latestOrder = orderList[orderList.length - 1];
        let fruitName = latestOrder.fruit;

        if(response.ok) {
            let data = await response.json();
            for (let i = 0; i < data.fruits.length; i++) {
                if (data.fruits[i].name === fruitName) {
                    console.log(`${data.fruits[i].name} - ${fruitName}`);

                    console.log(data.fruits[i].nutritions.calories);
                    caloriesSpan.textContent = data.fruits[i].nutritions.calories;

                    console.log(data.fruits[i].nutritions.carbohydrates);
                    carbSpan.textContent = data.fruits[i].nutritions.carbohydrates;

                    console.log(data.fruits[i].nutritions.protein);
                    proteinSpan.textContent = data.fruits[i].nutritions.protein;

                    console.log(data.fruits[i].nutritions.fat);
                    fatSpan.textContent = data.fruits[i].nutritions.fat

                    sugarSpan.textContent = data.fruits[i].nutritions.sugar
                    nameSpan.textContent = latestOrder.name

                    emailSpan.textContent = latestOrder.email;

                    phoneSpan.textContent = latestOrder.phone;
                    
                    fruitSpan.textContent = latestOrder.fruit;
                } 
            }
        } else {
            throw new Error(response.text())
        }
    } catch(error) {
        alert(error)
    }
}

getFruitsApi();