(()=>{
  fetch(`./data.json`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // code for displaying services cards
      const servicesContainer = document.querySelector('#services > .servicesContainer');
      data.services.forEach(service => {
        // console.log(service);
        const serviceCard = createServiceCard(service);
        // console.log(serviceCard);
        servicesContainer.appendChild(serviceCard);
      });

      // code for displaying tours cards
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