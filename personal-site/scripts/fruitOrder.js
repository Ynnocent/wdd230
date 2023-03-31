const fruitURL = `/wdd230/personal-site/data/fruityvice.json`;
const orderButton = document.querySelector("#orderButton");

const fruitChoice1 = document.querySelector("#choice1Name");
const fruitChoice2 = document.querySelector("#choice2Name");
const fruitChoice3 = document.querySelector("#choice3Name");

const radioFruit1 = document.querySelector("#fruitChoice1");
const radioFruit2 = document.querySelector("#fruitChoice2");
const radioFruit3 = document.querySelector("#fruitChoice3");



async function fruitApiCall() {
    try{
        let response = await fetch(fruitURL);

        if (response.ok) {
            let data = await response.json();
            // Display Fruit Data Here
            displayFruitInput(data);

            orderButton.addEventListener('click', function handleClick() {
                // Add order details to localStorage
                const fruitInput = document.querySelector("input[name='fruitChoice']:checked").value;
                const nameInput = document.querySelector("#firstName").value;
                const emailInput = document.querySelector("#email").value;
                const phoneInput = document.querySelector("#phone").value;

                // Check whether the array exist if not create a new one
                let orderList = JSON.parse(localStorage.getItem('orderList') || "[]");
                orderList.push({
                    name: nameInput,
                    email: emailInput,
                    phone: phoneInput,
                    fruit: fruitInput
                });

                localStorage.setItem('orderList', JSON.stringify(orderList));
            })

            return data;
        } else {
            throw new Error (await response.text());
        }
        
    } catch(error) {
        alert(error)
    }
    
}

function displayFruitInput(data) {
    fruitChoice1.textContent = data.fruits[0].name;
    fruitChoice2.textContent = data.fruits[4].name;
    fruitChoice3.textContent = data.fruits[10].name;

    radioFruit1.setAttribute("value", data.fruits[0].name);
    radioFruit2.setAttribute("value", data.fruits[4].name);
    radioFruit3.setAttribute("value", data.fruits[10].name);
}



fruitApiCall()
