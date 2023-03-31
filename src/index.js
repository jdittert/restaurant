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
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');
    
    // Card with cookie
    const mainImage = document.createElement('div');
    mainImage.classList.add('card', 'image-card');
    const cookieImage = document.createElement('img');
    cookieImage.src = 'swindle-cookie.jpg';
    cookieImage.classList.add('main-image');
    cookieImage.setAttribute('alt', 'Cookie');
    mainImage.appendChild(cookieImage);
    mainWrapper.appendChild(mainImage);

    // Card with description
    const description = document.createElement('div');
    description.classList.add('card', 'description');
    const descText = document.createElement('div');
    descText.classList.add('cardtext');
    const descTop = document.createElement('p');
    descTop.innerText = 'We only sell one thing - delicious chocolate chip cookies!';
    const descBot = document.createElement('p');
    descBot.innerText = 'Despite the different prices listed on the menu, we assure you that all cookies are identical. '
    +'There is absolutely no difference between any of the cookies at any of the price points.';
    descText.appendChild(descTop);
    descText.appendChild(descBot);
    description.appendChild(descText);
    mainWrapper.appendChild(description);

    // Create bottom section    
    const testCard = document.createElement('div');
    testCard.classList.add('card-long', 'testimonial');
    const testimonial = document.createElement('div');
    testimonial.classList.add('cardtext');
    testimonial.innerText = '"I\'ve tried all of the cookies. I really think I can taste the difference between them." -- Totally Real Customer';
    testCard.appendChild(testimonial);
    mainWrapper.appendChild(testCard);

    // Append sections to main
    element.appendChild(mainWrapper);    

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
