// variables for each of the fortune buttons
const fortuneButton = document.querySelector('[data-fortune]');
const randomFortune = document.querySelector('[data-random]');
const previousFortune = document.querySelector('[data-previous]');


// empty object the pulled fortunes will be placed into so they can be read
let fortune = [];
// function for fetching the fortunes from an API
function getFortune(){
    // url and code to fetch the data from the api
    const URL = "http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune"
    fetch(URL)
    .then(function(response){
        return response.json()
    .then(function(fortune){
        console.log(fortune);
        return fortune;
        })
    })
}
console.log(getFortune(fortune))
// function calls to add event listeners to each button
fortuneButton.addEventListener('click', getFortune);
randomFortune.addEventListener('click', randomFortune);
previousFortune.addEventListener('click', previousFortune);