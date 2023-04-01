function createMenu () {
    // Get main
    const element = document.getElementById('main');
    const mainWrapper = document.createElement('div')
    mainWrapper.classList.add('main-wrapper');
    element.appendChild(mainWrapper);

    // Create menu item
    const menuItem = document.createElement('div');
    menuItem.classList.add('card-long');
    menuItem.textContent = 'Test content';
    mainWrapper.appendChild(menuItem);

    return element;
}

function loadMenu () {
    const main = document.getElementById('main');
    main.textContent = '';
    createMenu();
}

export default loadMenu;