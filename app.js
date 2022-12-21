"use strict";

 async function getPlayerInfo () {
  //   const apiKey = "7pe7uupaubprfbr96au42ffb";
  //   const playerID = "41c44740-d0f6-44ab-8347-3b5d515e5ecf";
  const config = {
    method: 'GET',
    // mode: "cors",
   
  };
    
fetch(
  'https://api.sportradar.us/handball/trial/v2/en/players/sr:player:124683/profile.json?api_key=sa9v5e32szux4muf3frxqxkg',
  config
)
  .then(function (response) {
    console.info('Er is een response teruggekomen van de server');
    // console.log(response.json())
    return response.json();
  })
  .then(function (jsonObject) {
    console.info('json object is aangemaakt');
    console.log(jsonObject);
  });
}
 
     
      
      

      
 
function randomizeValues() {
  // Generate random id and assign them to variables
  var value = Math.floor(Math.random() * 100);
  document.querySelector('.js-nummer').innerHTML = value;
  var value1 = Math.floor(Math.random() * 100);
  var value2 = Math.floor(Math.random() * 100);
  var value3 = 100
  console.log(value1, value2, value3);
  var progress1 = value1 / value3 * 100;
  var progress=value2/value3*100;
  progress = Math.round(progress, 2);
  progress1 = Math.round(progress1, 2);
  console.log(progress);
  console.log(progress1);
  // Update the values on the page
  // document.getElementById('progress1').value = value1;
  // document.getElementById('progress').value = value2;
  // document.getElementById('progress') = value2;
  document.getElementById('js-progresss').innerHTML = `${progress}%`;
  document.getElementById('js-progresss1').innerHTML = `${progress1}%`;
 
    var element = document.getElementById('js-progress');
    var width = progress;
    element.style.width = width + '%';
    var element1 = document.getElementById('js-progress1');
    var width1 = progress1;
    element1.style.width = width1 + '%';
}


document.addEventListener('DOMContentLoaded', async function () {
  console.log('Test');

  const data=  getPlayerInfo();
  console.log(data);
  
});
