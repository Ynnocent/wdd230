const today = new Date()

const dateoptions = options = {
    year:"2-digit",
    month: "numeric",
    day: "numeric"
}

document.querySelector("#currentyear").textContent = today.getFullYear('en-US')
document.querySelector("#lastmodified").textContent = document.lastModified

const dateoptionsHeader = options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};

document.querySelector("#dateTime").textContent = today.toLocaleDateString('en-US', dateoptionsHeader);

// Toggle the menu open or closed
function toggleMenu(){
    document.querySelector("#navList").classList.toggle("menu-active");
    document.querySelector("#hamburger-x").classList.toggle("menu-active");
    document.querySelector("#hamburger-equiv").classList.toggle("menu-active");
}

// Attach click listener to the hamburger menu
document.querySelector("#menu").addEventListener('click', toggleMenu);