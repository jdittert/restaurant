import './style.css';
import loadHome from './home';

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
    const element = document.createElement('main');
    element.setAttribute('id', 'main');

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

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(main());
loadHome();
content.appendChild(footer());
