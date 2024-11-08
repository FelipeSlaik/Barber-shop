AOS.init();

const cardsData = [
    {Image: '/assets/horizontal.jpg', name: 'Corte de cabelo', price: 'R$ 45,00' },
    {Image: '/assets/horizontal.jpg', name: 'Barba completa', price: 'R$ 35,00' },
    {Image: '/assets/horizontal.jpg', name: 'Cabelo e barba', price: 'R$ 70,00' }
];

const cardsContainer = document.getElementById('cards-container');

function createCards(data){
    const card = document.createElement('div');
    card.className = 'card';

    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';

    const img = document.createElement('img');
    img.src= data.Image;
    img.alt = data.name;

    const name = document.createElement('h5');
    name.textContent = data.name;

    const price = document.createElement('button');
    price.textContent = data.price;

    infoContainer.appendChild(name);
    infoContainer.appendChild(price);

    card.appendChild(img);
    card.appendChild(infoContainer);

    return card;    
}

cardsData.forEach(data => {
    const card = createCards(data);
    cardsContainer.appendChild(card);
})