const map = L.map('map').setView([34.063590, -118.304215], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(data){
        // console.log(data)
        // these are the names of our fields in the google sheets:
        L.marker([data.lat,data.long]).addTo(map).bindPopup(`<h2>${data.name}</h2>`+ '' + `<p>${data.location}</p>` + '' +`<p>${data.timestamp}</p>`)
        return data.timestamp, data.name, data.location
}

let url = "https://spreadsheets.google.com/feeds/list/1lXoG993LBzX6SsR-gE2Y7bTMlXJJT52j-_Hzg02k9zE/o4eq4sq/public/values?alt=json"
fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
                // console.log(data)
                formatData(data)
        }
)


function formatData(theData){
        const formattedData = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
        const rows = theData.feed.entry
        for(const row of rows) {
          const formattedRow = {}
          for(const key in row) {
            if(key.startsWith("gsx$")) {
                  formattedRow[key.replace("gsx$", "")] = row[key].$t
            }
          }
          formattedData.push(formattedRow)
        }
        console.log(formattedData)
        formattedData.forEach(addMarker)        
}