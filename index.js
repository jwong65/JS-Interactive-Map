//console.log(clientId)
getCoordinates()
//Need to get the user's current location
async function getCoordinates(){
    latlong=await new Promise ((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    //need to get teh latitude and longitude of the current position
    return [latlong.coords.latitude, latlong.coords.longitude]
}
console.log(getCoordinates())

var map= L.map('map').setView(getCoordinates(), 13);