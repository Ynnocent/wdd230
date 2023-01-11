let name = "Ynno Plucena"
const today = new Date()

const dateoptions = options = {
    year:"2-digit",
    month: "numeric",
    day: "numeric"
}

document.querySelector("#currentyear").textContent = today.getFullYear('en-US')
document.querySelector("#lastmodified").textContent = document.lastModified

