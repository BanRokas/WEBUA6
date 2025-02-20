document
  .querySelector('#picture')
  .addEventListener('change', event =>{
    // console.log(event);
    const fileName = event.target.files[0]?.name;
    // console.log(fileName);
    const label = event.target.nextElementSibling;
    if(fileName){
      label.textContent = fileName;
      label.style.backgroundColor = 'green';
    } else {
      label.textContent = 'Select payment screenshot';
      label.style.backgroundColor = 'aliceblue';
    }
  });

document
  .querySelector('#testForm')
  .addEventListener('submit', e => {
    e.preventDefault(); // page will no longer refresh after submit
  });