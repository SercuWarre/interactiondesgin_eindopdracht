"use strict";

 async function getPlayerInfo (id) {
    const url = `http://127.0.0.1:5000/api/v1/players/${id}`;
    const response = await get(url)
	  console.log(response)
    return response;
  }
 
     
      
      
const get = (url) =>
  fetch(url)
    .then((r) => r.json())
    .catch((error) => console.log(error));
      
 
 async function randomizeValues() {
  let notification = document.getElementById('notification');

  // Display the notification
  notification.style.display = 'block';

  // Hide the notification after 2 seconds
  setTimeout(function () {
    notification.style.display = 'none';
  }, 1000);
  // Generate random id and assign them to variables
  let randomNumber = Math.random();
  const id = Math.floor(randomNumber * 6 + 1);
  console.log(id);
  let data=   await getPlayerInfo(id);
  console.log(data);
  var nummer = data['jersey_number'];
console.log(nummer);
  document.querySelector('.js-nummer').innerHTML ="player number: "+  nummer;
  var name = data['name'];
  document.querySelector('.js-name').innerHTML = name;
  var position = data['type'];
  document.querySelector('.js-position').innerHTML ="position: " +position;

  if(position=="M"){


  let circle = document.getElementById('circle');

// Set the left and top properties to position the circle
circle.style.left = '55%';
circle.style.top = '50%';}
  if(position=="P"){
    let circle = document.getElementById('circle');
    circle.style.left = '60%';
    circle.style.top = '50%';
  }
  if(position=="RB"){
    let circle = document.getElementById('circle');
    circle.style.left = '57%';
    circle.style.top = '60%';
  }
  if(position=="LB"){
    let circle = document.getElementById('circle');
    circle.style.left = '57%';
    circle.style.top = '40%';
  }
  if(position=="LW"){
    let circle = document.getElementById('circle');
    circle.style.left = '66%';
    circle.style.top = '33%';
  }
  if(position=="RW"){
    let circle = document.getElementById('circle');
    circle.style.left = '66%';
    circle.style.top = '65%';
  }



  var age = data['date_of_birth'];
  document.querySelector('.js-age').innerHTML ="date_of_birth: "+ age;
  var height = data['height'];
  document.querySelector('.js-height').innerHTML ="height: " +height+"cm";
  var weight = data['weight'];
  document.querySelector('.js-weight').innerHTML ="weight: " +weight+"kg";
  var competitions = data['competitors'];
  let comp=[];
  document.querySelector('.js-competition').innerHTML="";
  for (var i = 0; i < competitions.length; i++) {

     comp= competitions[i].name;
    console.log(comp);
    document.querySelector('.js-competition').innerHTML+="<li>"+comp+"</li>";
  }
  var goals = data['goals'];
  document.querySelector('.js-goals').innerHTML =goals;
  var shots = data['shots'];
  document.querySelector('.js-shots').innerHTML =shots;
  var assists = data['assists'];
  document.querySelector('.js-assists').innerHTML =assists;




 
  var progress=goals/shots*100;
  progress = Math.round(progress, 2);


  // // Update the values on the page

  document.getElementById('js-progresss').innerHTML = `${progress}%`;
 
    var element = document.getElementById('js-progress');
    var width = progress;
    element.style.width = width + '%';
}





document.addEventListener('DOMContentLoaded', async function () {
  console.log('Test');
  randomizeValues();
  // const data =  getPlayer();

});
