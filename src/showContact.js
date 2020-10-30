const showContact = () => {
	let infoDiv = document.getElementById("infodiv");
	let menuTab = document.getElementById("menu");
	let tabDiv = document.getElementById("tabdiv");
	let contentDiv = document.getElementById("contentdiv");
	const contactDiv = document.createElement("div");
	const contactContent = document.createElement("div");
	infoDiv.appendChild(contactDiv);
	contactDiv.appendChild(contactContent);

	contactDiv.id = "contactdiv";

	contentDiv.style.backgroundColor = "hsla(0, 0%, 0%, 0.6)";

	contentDiv.style.zIndex = "10";
	contentDiv.style.position = "relative";
	infoDiv.style.top = "0";
	infoDiv.style.paddingTop = "2.5rem";

	//tabDiv.style.backgroundColor = "transparent";

	contactDiv.style.display = "flex";
	contactDiv.style.width = "100%";
	contactDiv.style.height = "72%";
	contactDiv.style.position = "fixed";
	contactDiv.style.bottom = "2.3rem";
	contactDiv.style.justifyContent = "center";
	contactDiv.style.alignItems = "center";
	contactDiv.style.backgroundColor = "transparent";

	contactContent.style.backgroundColor = "white";
	contactContent.style.width = "30%";
	contactContent.style.height = "60%";
	contactContent.style.overflow = "scroll";
	contactContent.style.fontFamily = "Staatliches";
	contactContent.style.color = "hsla(0, 0%, 20%, 1)";
	contactContent.style.fontSize = "2rem";
	contactContent.style.textAlign = "center";
	contactContent.style.padding = "1rem 6rem 1rem 6rem";
	contactContent.innerHTML =
		"location<br><p style=font-family:raleway;font-size:1.2rem>15 Shropshire Ln<br>Milbridge, ME 04658<br>(222) 214-3590</p><img src='../media/map.jpg'>";
	let contactTab = document.getElementById("contact");
	contactTab.style.backgroundColor = "hsla(0, 0%, 0%, 0.7)";
	menuTab.style.backgroundColor = "hsla(0, 0%, 0%, 0)";
};

export default showContact;
