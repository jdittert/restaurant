function createMenu () {
    // Get main
    const element = document.getElementById('main');
    const menuWrapper = document.createElement('div')
    menuWrapper.classList.add('menu-wrapper');
    element.appendChild(menuWrapper);

    // Create menu item
    menuItems.forEach(displayItem);

    function displayItem(item) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('card-long');
        const itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = item.title;
        menuItem.appendChild(itemTitle);
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `$${item.price}`;
        menuItem.appendChild(itemPrice);
        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);  
        menuWrapper.appendChild(menuItem);
    }
    

    return element;
}

const menuItems = [
    {
        'title': 'The $2 Cookie',
        'price': '2',
        'description': 'Our classic chocolate chip cookie.'
    },
    {
        'title': 'The $5 Cookie',
        'price': '5',
        'description': 'Our classic chocolate chip cookie, but it costs $5.'
    },
    {
        'title': 'The $20 Cookie',
        'price': '20',
        'description': 'Our classic chocolate chip cookie at ten times the price!'
    },
    {
        'title': 'The $100 Cookie',
        'price': '100',
        'description': 'This is exactly the same as our $2 Cookie. Only a fool would buy this cookie.'
    },
];

function loadMenu () {
    const main = document.getElementById('main');
    main.textContent = '';
    createMenu();
}

export default loadMenu;