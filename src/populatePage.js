const populatePage = () => {
	document.body.style.margin = "0";
	document.body.style.padding = "0";
	document.body.style.height = "100vh";
	document.body.style.fontSize = "16px";
	document.body.style.boxSizing = "border-box";

	document.body.style.backgroundImage =
		"url('https://images.pexels.com/photos/2615407/pexels-photo-2615407.jpeg')";
	document.body.style.backgroundSize = "100% 100%";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = "center";

	const contentDiv = document.getElementById("content");
	const infoDiv = document.createElement("div");
	const header = document.createElement("header");
	const blurb = document.createElement("article");
	contentDiv.appendChild(infoDiv);
	infoDiv.appendChild(header);
	infoDiv.appendChild(blurb);

	contentDiv.id = "contentdiv";
	infoDiv.id = "infodiv";
	header.id = "header";
	blurb.id = "blurb";

	contentDiv.style.clear = "both";

	contentDiv.style.backgroundColor = "hsla(0, 0%, 0%, 0.3)";
	contentDiv.style.position = "relative";
	contentDiv.style.zIndex = "10";
	contentDiv.style.height = "calc(100% - 2.3rem)";
	contentDiv.style.marginBottom = "2rem";
	infoDiv.style.paddingTop = "2.5rem";
	infoDiv.style.width = "100%";

	header.style.fontFamily = "Staatliches";
	header.style.position = "relative";
	header.style.color = "white";
	header.style.fontSize = "5rem";
	header.style.textAlign = "center";
	header.style.overflow = "hidden";
	header.style.height = "auto";

	blurb.style.fontFamily = "Raleway";
	blurb.style.fontWeight = "500";
	blurb.style.color = "white";
	blurb.style.fontSize = "1.2rem";
	blurb.style.textAlign = "center";

	header.textContent = "leaf garden cafe";
	blurb.innerHTML =
		"ultra healthy power salads overflowing<br>with interesting ingredients sourced from local farms";

	const tabDiv = document.createElement("div");
	const menuTab = document.createElement("button");
	const menuTabText = document.createTextNode("menu");
	const contactTab = document.createElement("button");
	const contactTabText = document.createTextNode("contact");
	document.body.appendChild(tabDiv);
	menuTab.appendChild(menuTabText);
	tabDiv.appendChild(menuTab);
	contactTab.appendChild(contactTabText);
	tabDiv.appendChild(contactTab);

	tabDiv.style.display = "inline-block";
	tabDiv.style.backgroundColor = "hsla(0, 0%, 0%, 0)";
	tabDiv.style.zIndex = "20";
	tabDiv.style.position = "fixed";
	tabDiv.style.bottom = "0";
	tabDiv.style.width = "100%";
	tabDiv.style.textAlign = "center";
	tabDiv.id = "tabdiv";

	menuTab.style.border = "none";
	menuTab.style.background = "none";
	menuTab.style.fontFamily = "Staatliches";
	menuTab.style.fontSize = "1.5rem";
	menuTab.style.color = "white";
	menuTab.style.padding = "0.45rem 1rem 0 1rem";
	menuTab.style.cursor = "pointer";
	menuTab.id = "menu";

	contactTab.style.border = "none";
	contactTab.style.background = "none";
	contactTab.style.fontFamily = "Staatliches";
	contactTab.style.fontSize = "1.5rem";
	contactTab.style.color = "white";
	contactTab.style.padding = "0.45rem 1rem 0 1rem";
	contactTab.style.cursor = "pointer";
	contactTab.id = "contact";
};

export default populatePage;
