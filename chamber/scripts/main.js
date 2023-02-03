var messagedate = new Date();

if (messagedate.getDay()==1 || messagedate.getDay()==4) {
    document.querySelector("#meetandgreet").classList.add("active");
}