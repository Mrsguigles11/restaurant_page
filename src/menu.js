
export {menuContent};

function menuContent () {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu_content');
    content.append(menuContent);
    const startersHeader = document.createElement('h1');
    startersHeader.textContent = "Starters";
    startersHeader.setAttribute('class', 'menu_header');
    const startersList = document.createElement('div');
    startersList.setAttribute('class', 'menu_list');
    startersList.textContent = "Pumpkin Soup\nJalapeno Poppers\nTraditional Greek Houmous\nGarden Salad";
    const startersPriceList = document.createElement('div');
    startersPriceList.setAttribute('class', 'menu_price_list');
    startersPriceList.textContent = "5\n7\n5\n4";
    const mainsHeader = document.createElement('h1');
    mainsHeader.setAttribute('class', 'menu_header');
    mainsHeader.textContent = "Mains";
    const mainsList = document.createElement('div');
    mainsList.setAttribute('class', 'menu_list');
    mainsList.textContent = "Mushroom Risotto\nVeggie Dumplings W/ Red Kraut\nLasagna\nVeggie Burger\nVegan Fish and Chips\nVegan Currywurst";
    const mainsPriceList = document.createElement('div');
    mainsPriceList.setAttribute('class', 'menu_price_list');
    mainsPriceList.textContent = "10\n10\n12\n11\n13\n12";
    const dessertsHeader = document.createElement('div');
    dessertsHeader.setAttribute('class', 'menu_header');
    dessertsHeader.textContent = "Desserts";
    const dessertsList = document.createElement('div');
    dessertsList.setAttribute('class', 'menu_list');
    dessertsList.textContent = "Gypsy Tart\nSachertorte\nEaton Mess";
    const dessertsPriceList = document.createElement('div');
    dessertsPriceList.setAttribute('class', 'menu_price_list');
    dessertsPriceList.textContent = "7\n8\n6";

    menuContent.append(startersHeader, startersList, startersPriceList, mainsHeader, mainsList, mainsPriceList,
                        dessertsHeader, dessertsList, dessertsPriceList);
}
