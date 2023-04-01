function createContact() {
    const element = document.getElementById('main');
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('contact-wrapper');
    element.appendChild(mainWrapper);

    // Create contact cards
    const contactOne = document.createElement('div');
    contactOne.classList.add('card');
    contactOne.textContent = 'Location One';
    mainWrapper.appendChild(contactOne);

    const contactTwo = document.createElement('div');
    contactTwo.classList.add('card');
    contactTwo.textContent = 'Location Two';
    mainWrapper.appendChild(contactTwo);

    return element;
}

function loadContact () {
    const main = document.getElementById('main');
    main.textContent = '';
    createContact();
}

export default loadContact;