import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

homeContent();

(function () {
    const homeButton = document.querySelector("#home");

    homeButton.addEventListener('click', () => {
        homeContent();
    })
})();

(function () {
    const menuButton = document.querySelector("#menu");

    menuButton.addEventListener('click', () => {
        menuContent();})
})();

(function () {
    const aboutButton = document.querySelector("#about");

    aboutButton.addEventListener('click', () => {
        aboutContent();
    })
})();
