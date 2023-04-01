function home() {
    // Create initial main
    const element = document.getElementById('main');    

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

function loadHome() {    
    const main = document.getElementById('main');
    main.textContent = '';
    home();
}

export default loadHome;