let dropdown = document.getElementById('select');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Fruit';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://raw.githubusercontent.com/VilaCafe/WDD230/main/FINAL/data/fruit.js';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option','option2');
      option.text = data[i].name;
      
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

