import restaurantPicOneImport from "../img/restaurantPic1.jpg";
import restaurantPicTwoImport from "../img/restaurantPic2.jpg";
export {homeContent};


function homeContent () {

const content = document.querySelector("#content");
content.innerHTML = '';
const homeContent = document.createElement("div");
homeContent.setAttribute('class', 'home_content');
content.appendChild(homeContent);
homeContent.textContent = "Welcome to Woodys! A pleasant food house with a hearty plant based menu in the middle of Timbuktu! Feel free to give our menu a browse, drop us a message or if you're really feeling it, book a table!";
const homePicturesWrapper = document.createElement('div');
homePicturesWrapper.setAttribute('class', 'home_pictures_wrapper');
homeContent.appendChild(homePicturesWrapper);
const restaurantPicOne = document.createElement('img');
restaurantPicOne.src = restaurantPicOneImport;
restaurantPicOne.setAttribute('class', 'home_picture');
homePicturesWrapper.appendChild(restaurantPicOne);
const restaurantPicTwo = document.createElement('img');
restaurantPicTwo.src = restaurantPicTwoImport;
restaurantPicTwo.setAttribute('class', 'home_picture');
homePicturesWrapper.appendChild(restaurantPicTwo);
}
