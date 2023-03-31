import './style.css';

function header() {    
    // Create initial header
    const element = document.createElement('header');

    // Create store name
    const storeName = document.createElement('div');
    storeName.classList.add('store-name');
    storeName.innerText = 'Swindler\'s Sweets'
    element.appendChild(storeName);

    // Create navBar
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');   
    element.appendChild(navBar); 

    // Create navigation items from array
    const navItems = ['Home', 'Menu', 'Contact'];
    navItems.forEach(navItem => {
        const item = document.createElement('div');
        item.classList.add('navitem');
        item.innerText = navItem;
        navBar.appendChild(item);        
    })    

    return element;
}

function main() {
    // Create initial main
    const element = document.createElement('main');

    // Create top section
    const mainTop = document.createElement('div');
    mainTop.classList.add('main-top');
    
    // Card with cookie
    const mainImage = document.createElement('div');
    mainImage.classList.add('card');
    const cookieImage = document.createElement('img');
    cookieImage.src = 'swindle-cookie.jpg';
    cookieImage.classList.add('main-image');
    cookieImage.setAttribute('alt', 'Cookie');
    mainImage.appendChild(cookieImage);
    mainTop.appendChild(mainImage);

    // Card with description
    const description = document.createElement('div');
    description.classList.add('card');
    const descText = document.createElement('div');
    descText.classList.add('cardtext');
    descText.innerText = 'We only sell one thing - delicious chocolate chip cookies! '
    +'Despite the different prices listed on the menu, we assure you that all cookies are identical. '
    +'There is absolutely no difference between any of the cookies at any of the price points.';
    description.appendChild(descText);
    mainTop.appendChild(description);

    // Create bottom section
    const mainBottom = document.createElement('div');
    mainBottom.classList.add('main-bottom');
    const testCard = document.createElement('div');
    testCard.classList.add('card-long');
    const testimonial = document.createElement('div');
    testimonial.classList.add('cardtext', 'testimonial');
    testimonial.innerText = '"I\'ve tried all of the cookies. I really think I can taste the difference between them." -- Totally Real Customer';
    testCard.appendChild(testimonial);
    mainBottom.appendChild(testCard);

    // Append sections to main
    element.appendChild(mainTop);
    element.appendChild(mainBottom);

    return element;
}

function footer() {
    // Create initial footer
    const element = document.createElement('footer');

    // Create copyright div
    const copyright = document.createElement('div');
    copyright.innerHTML = 'Copyright &copy; 2023 Jon Dittert'
    element.appendChild(copyright);

    // Create image credit div
    const credit = document.createElement('div');
    credit.innerHTML += 'Cookie image by <a href="https://unsplash.com/@arianassz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ariana Suárez</a>' 
    +' on <a href="https://unsplash.com/s/photos/chocolate-chip-cookie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    element.appendChild(credit);

    return element;
}

document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(main());
document.getElementById('content').appendChild(footer());
