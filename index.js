
//console.log(clientId)
getCoordinates()
//Need to get the user's current location
async function getCoordinates(){
    latlong=await new Promise ((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    //need to get the latitude and longitude of the current position
    return [latlong.coords.latitude, latlong.coords.longitude]
}
console.log(getCoordinates())

window.onload = async()=>{
    let cooridnates = await getCoordinates()
    const myMap = L.map('map', {
        center: cooridnates,
        zoom: 12,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(myMap)

    var marker = L.marker(cooridnates).addTo(myMap);
}
//Going to need to use .setView to help change the options

// function selectOption(){
//     const myMap = 
// }
//Need an event listener that will change the map for clicking on the button
document.getElementById('submitbtn').addEventListener("click", {

})
//var map= L.map('map').setView(getCoordinates(), 13);
async function setView(){
    let cooridnates = await getCoordinates()
    if (document.getElementById('location')=='somewhere'){
        myMap.setView(cooridnates)
    }
}

//Fetch from foursquare
async function getBusinesses(){
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3Ky6PFiqAIcEAKANyLYcLrvbmPuVWiSxxOwHrP8'
    }
  };

  fetch('https://api.foursquare.com/v3/places/search', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
getBusinesses()
//creating an array of businesses
const businesses =[]

placeholder = L.layerGroup(businesses)
