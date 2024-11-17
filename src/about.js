import chefImageImport from "../img/chefImage.jpg";
import ownerImageImport from "../img/ownerImage.jpg";
export {aboutContent};

function aboutContent () {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const aboutContent = document.createElement('div');
    content.appendChild(aboutContent);
    aboutContent.setAttribute('class', 'about_content');
    const chefImage = document.createElement('img');
    chefImage.src = chefImageImport;
    chefImage.setAttribute('class', 'about_image');
    const chefBio = document.createElement('div');
    chefBio.setAttribute('class', 'about_bio');
    chefBio.textContent = "Hi I'm Woody! Chef of Woodys and all round good guy. Please contact me here:\nwoody@emailaddress.com\n+44 0000 00000";
    aboutContent.append(chefImage, chefBio);
    const ownerImage = document.createElement('img');
    ownerImage.src = ownerImageImport;
    ownerImage.setAttribute('class', 'about_image');
    const ownerBio = document.createElement('div');
    ownerBio.setAttribute('class', 'about_bio');
    ownerBio.textContent = "Hi im Derek! I part own the restaurant with Woody and would love to hear your feedback and suggestions here:\nderek@emailaddress.com\n+44 0000 00000";
    aboutContent.append(ownerImage, ownerBio);
    const restaurantDetailsWrapper = document.createElement('div');
    restaurantDetailsWrapper.setAttribute('class', 'restaraunt_details_wrapper');
    aboutContent.append(restaurantDetailsWrapper);
    const restaurantLocationwrapper = document.createElement('div');
    restaurantLocationwrapper.setAttribute('class', 'details_wrappers');
    const openingHoursWrapper = document.createElement('div');
    openingHoursWrapper.setAttribute('class', 'details_wrappers');
    restaurantDetailsWrapper.append(restaurantLocationwrapper, openingHoursWrapper);
    const restaurantLocationHeading = document.createElement('h3');
    restaurantLocationHeading.textContent = "Where to find us:"
    const restaurantLocationContent = document.createElement('p');
    restaurantLocationContent.setAttribute('class', 'restaurant_details_content');
    restaurantLocationContent.textContent = "2 Streety Mcstreet\nTimbuktu\nAB1 2CD";
    restaurantLocationwrapper.append(restaurantLocationHeading, restaurantLocationContent);
    const openingHoursHeading = document.createElement('h3');
    openingHoursHeading.textContent = "Opening Hours:";
    const openingHoursContent = document.createElement('p');
    openingHoursContent.setAttribute('class', 'restaurant_details_content');
    openingHoursContent.textContent = "Monday: closed\nTuesday: closed\nWednesday: 12.00 - 21.00\nThursday: 12.00 - 21.00\nFriday: 12.00 - 22.00\nSaturday: 12.00 - 22.00\nSunday: 12.00 - 22.00";
    openingHoursWrapper.append(openingHoursHeading, openingHoursContent);
}