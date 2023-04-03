function createContact() {
    const element = document.getElementById('main');
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('contact-wrapper');
    element.appendChild(mainWrapper);

    // Create contact cards
    locations.forEach(createContactCard);

    function createContactCard(store) {
        // Create card
        const contact = document.createElement('div');
        contact.classList.add('card', 'contact-card');
        mainWrapper.appendChild(contact);
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('contact-card-wrapper');
        contact.appendChild(cardWrapper);
        // Location div
        const location = document.createElement('div');
        location.classList.add('location');
        location.textContent = store.location;
        cardWrapper.appendChild(location);
        // Hours div
        const hours = document.createElement('div');
        hours.classList.add('hours');
        hours.textContent = store.hours
        cardWrapper.appendChild(hours);
        // Address div
        const address = document.createElement('div');
        address.classList.add('address');
        address.innerText = `${store.address}\n${store.city}`;
        cardWrapper.appendChild(address);
        // Phone div
        const phone = document.createElement('div')
        phone.classList.add('phone');
        phone.textContent = `${store.phone}`
        cardWrapper.appendChild(phone);
        // Email div
        const email = document.createElement('div');
        email.classList.add('email');
        email.textContent = `${store.email}`;
        cardWrapper.appendChild(email);      
    }   

    return element;
};

const locations = [
    {
        'location': 'Pirate Bay',
        'hours': '11am - 11pm',
        'address': '123 Bay Boulevard',
        'city': 'Pirate Bay, ST 12345',
        'phone': '123-456-7890',
        'email': 'priatebay@swindlerssweets.com'
    },
    {
        'location': 'Cove City',
        'hours': '11am - 11pm',
        'address': '123 Ship Street',
        'city': 'Cove City, ST 12345',
        'phone': '123-456-7890',
        'email': 'covecity@swindlerssweets.com'
    }    
];

function loadContact () {
    const main = document.getElementById('main');
    main.textContent = '';
    createContact();
}

export default loadContact;