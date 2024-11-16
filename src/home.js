export {homeContent};


function homeContent () {

const content = document.querySelector("#content");
content.innerHTML = '';
const homeContent = document.createElement("div");
homeContent.setAttribute('class', 'home_content');
content.appendChild(homeContent);
homeContent.textContent = "Welcome to Woodys! A pleasant food house with a hearty plant based menu in the middle of Timbuktu! Feel free to give our menu a browse, drop us a message or if you're really feeling it, book a table!";

}
