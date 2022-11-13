//console.log(clientId)
//getCoordinates()
//Need to get the user's current location
async function getCoordinates(){
    latlong=await new Promise ((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    //need to get teh latitude and longitude of the current position
    return [latlong.coords.latitude, latlong.coords.longitude]
}
//console.log(getCoordinates())

const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

//var map= L.map('map').setView(getCoordinates(), 13);