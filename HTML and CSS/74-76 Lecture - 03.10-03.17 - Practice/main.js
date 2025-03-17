(()=>{
  fetch(`./data.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // code for displaying services cards
      const servicesContainer = document.querySelector('#services > .servicesContainer');
      data.services.forEach(service => {
        // console.log(service);
        const serviceCard = createServiceCard(service);
        // console.log(serviceCard);
        servicesContainer.appendChild(serviceCard);
      });

      // code for displaying tours cards
      const toursContainer = document.querySelector('#tours > .toursContainer');
      data.tours.forEach(tour => {
        const tourCard = createTourCard(tour);
        // console.log(tourCard);
        toursContainer.appendChild(tourCard);
      });
    });
})();

function createServiceCard(card){
  const cardDiv = document.createElement('div');

  const icon = document.createElement('i');
  icon.className = card.icon;

  const heading = document.createElement('h3');
  heading.textContent = card.title;

  const par = document.createElement('p');
  par.textContent = card.description;

  cardDiv.append(icon, heading, par);
  return cardDiv;
}

function createTourCard(card){
  const tourCard = document.createElement('div');

  // div.image
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');

  const image = document.createElement('img');
  image.setAttribute('src', card.image);
  image.setAttribute('alt', card.title);

  const par = document.createElement('p');
  par.textContent = card.date;

  imageDiv.append(image, par);

  // div.info
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');

  const heading = document.createElement('h3');
  heading.textContent = card.title;

  const infoChildDiv = document.createElement('div');

  const mapLink = document.createElement('a');
  mapLink.setAttribute('href', card.mapsLink);
  mapLink.setAttribute('target', '_blank');

  const mapIcon = document.createElement('i');
  mapIcon.classList.add('bi', 'bi-map-fill');

  const locationName = document.createElement('span');
  locationName.textContent = card.location;

  mapLink.append(mapIcon, locationName);

  const infoChildChildDiv = document.createElement('div');

  const tourDuration = document.createElement('span');
  // tourDuration.textContent = card.duration + ' Days';
  tourDuration.textContent = `${card.duration} Days`;

  const tourPrice = document.createElement('span');
  tourPrice.textContent = `From $${card.price}`;

  infoChildChildDiv.append(tourDuration, tourPrice);

  infoChildDiv.append(mapLink, infoChildChildDiv);

  infoDiv.append(heading, infoChildDiv);

  tourCard.append(imageDiv, infoDiv);

  return tourCard;
}