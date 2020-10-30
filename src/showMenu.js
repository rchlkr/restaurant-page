const showMenu = () => {
	let infoDiv = document.getElementById("infodiv");
	let contactTab = document.getElementById("contact");
	let tabDiv = document.getElementById("tabdiv");
	let contentDiv = document.getElementById("contentdiv");
	const menuDiv = document.createElement("div");
	const menuContent = document.createElement("div");
	infoDiv.appendChild(menuDiv);
	menuDiv.appendChild(menuContent);

	menuDiv.id = "menudiv";

	contentDiv.style.backgroundColor = "hsla(0, 0%, 0%, 0.6)";
	contentDiv.style.zIndex = "10";
	contentDiv.style.position = "relative";
	infoDiv.style.top = "0";
	infoDiv.style.paddingTop = "2.5rem";

	//menuDiv.style.backgroundColor = "hsla(0, 0%, 0%, 0.6)";
	menuDiv.style.display = "flex";
	menuDiv.style.width = "100%";
	menuDiv.style.height = "72%";
	menuDiv.style.position = "fixed";
	menuDiv.style.bottom = "2.3rem";
	menuDiv.style.justifyContent = "center";
	menuDiv.style.alignItems = "center";
	menuDiv.style.backgroundColor = "transparent";

	menuContent.style.backgroundColor = "white";
	menuContent.style.width = "30%";
	menuContent.style.height = "60%";
	menuContent.style.overflow = "scroll";
	menuContent.style.fontFamily = "Staatliches";
	menuContent.style.color = "hsla(0, 0%, 20%, 1)";
	menuContent.style.fontSize = "2rem";
	menuContent.style.textAlign = "center";
	menuContent.style.padding = "1rem 6rem 1rem 6rem";
	menuContent.innerHTML =
		"dinner salads<br><br><p style='font-size:1.2rem'>the standard</p><p style='font-family:raleway;font-size:0.8rem'>garbanzo beans, adzuki beans, alfalfa sprouts, sunflower seeds & heirloom tomatoes on a bed of leafy romaine & tossed in a lemon herb vinaigrette</p><br><p style='font-size:1.2rem'>the chef</p><p style='font-family:raleway;font-size:0.8rem'>hard-boiled egg, heirloom tomato, hemp hearts, artichoke hearts & avocado on a bed of spring mix & tossed in a creamy poppyseed dressing</p><br><p style='font-size:1.2rem'>the taco</p><p style='font-family:raleway;font-size:0.8rem'>black beans, kidney beans, white corn, flax seeds & gaucamole on a bed of romaine hearts & tossed in a zesty southwest vinaigrette</p>";

	let menuTab = document.getElementById("menu");
	menuTab.style.backgroundColor = "hsla(0, 0%, 0%, 0.7)";
	contactTab.style.backgroundColor = "hsla(0, 0%, 0%, 0)";

	//tabDiv.style.backgroundColor = "transparent";
};

export default showMenu;
