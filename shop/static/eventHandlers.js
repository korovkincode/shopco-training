const topMessageCross = document.getElementById("top-message-close");
topMessageCross.addEventListener("click", () => {
    topMessage = document.getElementById("top-message");
    topMessage.style.display = "none";
});

const dropdownOpener = document.getElementById("dropdown-opener");
dropdownOpener.addEventListener("click", () => {
    dropdownLinks = document.getElementById("dropdown-links");
    if (dropdownLinks.style.display == "none") dropdownLinks.style.display = "block";
    else dropdownLinks.style.display = "none";
});