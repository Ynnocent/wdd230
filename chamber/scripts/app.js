const today = new Date()

const dateoptions = options = {
    year:"2-digit",
    month: "numeric",
    day: "numeric"
}

document.querySelector("#currentyear").textContent = today.getFullYear('en-US')
document.querySelector("#lastmodified").textContent = document.lastModified

const dateoptionsHeader = options = {
    year:"numeric",
    weekday:"long",
    month:"long",
    day:"numeric"
}

document.querySelector("#dateTime").textContent = today.toLocaleDateString('en-US',dateoptionsHeader)