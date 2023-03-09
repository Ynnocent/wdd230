const dataURL = './data/data.json';
const directoryContent = document.querySelector("#directory-container");
const toggleButton = document.querySelector("#toggle-view")

async function getBusiness() {
    const response = await fetch(dataURL);
    const data = await response.json();
    return data
}

async function listBusinesses() {
    
    const dataResponse = await getBusiness()

    for (let i = 0; i < dataResponse.length; i++) {    
        
        let businessObjects = await destructureObjects(dataResponse[i])
        businessObjects.classList.add("business-card")
        
        
        directoryContent.appendChild(businessObjects)
    }
}

function destructureObjects({name, address, number, url, membership}) {
    const newUlObjects = document.createElement("ul");

    newUlObjects.innerHTML = `<img src="${"./images/webp/shirelogo.webp"}">
     <li>${name}</li>
     <li>${number}</li>
     <li>${address}</li>
     <li><a href=${url}>${url}</a></li>
     `;
    if (membership == "gold") {
        newUlObjects.setAttribute("id","goldmembership")
    }
    return newUlObjects;
}

function handleButton(button) {
    button.addEventListener("click", () => {
        if (button.classList.contains('list-view')) {
            button.classList.add("card-view");
            button.classList.remove("list-view");
            button.innerHTML = "CARD";

            directoryContent.classList.add("in-card-mode")
            directoryContent.classList.remove("in-list-mode")
        } else {
            button.classList.add("list-view");
            button.classList.remove("card-view");
            button.innerHTML = "LIST";

            directoryContent.classList.add("in-list-mode")
            directoryContent.classList.remove("in-card-mode")
        }
        
        
    })
}



handleButton(toggleButton)
listBusinesses()