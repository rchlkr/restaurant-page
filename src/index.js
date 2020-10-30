import populatePage from "./populatePage";
import showMenu from "./showMenu";
import showContact from "./showContact";

window.onLoad = populatePage();

let toggleMenu = document.getElementById("menu");
let toggleContact = document.getElementById("contact");
let infoDiv = document.getElementById("infodiv");

toggleMenu.addEventListener("click", function () {
	infoDiv.removeChild(infoDiv.childNodes[1]);
	showMenu();
});

toggleContact.addEventListener("click", function () {
	infoDiv.removeChild(infoDiv.childNodes[1]);
	showContact();
});

/*
window.onLoad = populatePage();

let toggleMenu = document.getElementById("menu");
let toggleContact = document.getElementById("contact");
let infoDiv = document.getElementById("infodiv");

toggleMenu.addEventListener("click", function () {
	infoDiv.removeChild(infoDiv.childNodes[1]);
	showMenu();
});

toggleContact.addEventListener("click", function () {
	infoDiv.removeChild(infoDiv.childNodes[1]);
	showContact();
});
*/
