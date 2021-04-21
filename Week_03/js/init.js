// declare variables
let zoomLevel = 13;
const mapCenter = [34.03261234039084, -118.40392752676965];

// use the variables
const map = L.map('map').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${message}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title,message){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 


    // attach an event listner to the button with Leaflet's map.flyTo
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

// use our marker functions
addMarker(34.012310, -118.388810,'West Los Angeles College','10100 Jefferson Blvd, Culver City, CA 90230')
addMarker(34.032400,-118.308160,'FAME Renaissance Center','1968 W Adams Blvd, Los Angeles, CA 90018')
addMarker(34.039490,-118.321680,'Playa Las Tunas Banquet Hall','1911 4th Ave, Los Angeles, CA 90018 ')
addMarker(34.028100,-118.409510,'IMAN Cultural Center','3376 Motor Ave, Los Angeles, CA 90034')
addMarker(34.045945734692296, -118.44975213561176,'Felicia Mahood Multipurpose Center', '11338 Santa Monica Blvd, Los Angeles CA 90025')