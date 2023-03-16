const testDiv = document.querySelector("#testDiv");
const testUL = document.querySelector("#testul");

const spotlightDiv = document.querySelector(".spotlightDiv");

const dataURL = "./data/data.json";

async function loadJsonData() {
  const response = await fetch(dataURL);
  const data = await response.json();
  return data;
}

async function loadData() {
  const descriptionBusData = await loadJsonData();
  let idArray = [];

  descriptionBusData.map(({ membership, id }) => {
    if (membership === "gold") {
      idArray.push(id);
    }
  });

  for (let i = 0; i < 3; i++) {
    let rndIndex = Math.floor(Math.random() * idArray.length);
    const selectedId = idArray[rndIndex];
    const selectedBusData = descriptionBusData.find(
      (bus) => bus.id === selectedId && bus.membership === "gold"
    );

    const newBusDiv = document.createElement("div");
    newBusDiv.setAttribute("class", "spotlightItem");
    newBusDiv.innerHTML = `
        <img src="${selectedBusData.imgPath}" alt="${selectedBusData.name}">
        <h1>${selectedBusData.name}</h1>
        <p>${selectedBusData.description}</p>
        `;

    spotlightDiv.append(newBusDiv);
    idArray.splice(rndIndex, 1);
  }
}

loadData();
