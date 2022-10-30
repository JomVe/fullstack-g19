const url =' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let fullnom = document.getElementById('fullnom');
let telef = document.getElementById('telef');
let email2 = document.getElementById('email2');
let ciudad = document.getElementById('ciudad');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

function updateProfile (profile){
  avatar.src = profile.results[0].picture.medium;
  fullnom.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  telef.innerHTML = profile.results[0].phone; 
  email2.innerHTML = profile.results[0].email;
  ciudad.innerHTML = profile.results[0].location.city;
  return 1;
}

function printError (error){
  console.log(error);
}