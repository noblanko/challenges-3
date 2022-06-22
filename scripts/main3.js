
/* MapBox API */


// api token
mapboxgl.accessToken = 'pk.eyJ1Ijoia29ueWFrbyIsImEiOiJjbDRwMXFuZTQwNXkxM2NzMnFtd2ZhODEzIn0.DmgRGb4UTi3lLyyCQu43qA';

// map

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-80.70283, 28.66583], // Kennedy Space Center, Meritt City, Florida
  zoom: 6,
});

//popup

/*tried to connect with other api in popup, didn't get to show
let myPopup = new mapboxgl.Popup().setHTML('<div id='message'> </div>');
let popupMessage = document.getElementById('message');
popupMessage.innerHTML = degreesC + '<br>' + wDesc + '<br>' + wind ; */

var myPopup = new mapboxgl.Popup().setHTML('<h2> Kennedy Space Center </h2> <p> Meritt City </p> <p>Cape Canaveral</p> <p> Florida </p>');

// visual marker

var marker = new mapboxgl.Marker().setLngLat([-80.70283, 28.66583]).setPopup(myPopup).addTo(map);

// controls of the map

map.addControl(new mapboxgl.NavigationControl()); 



/* OpenWeather API */

//issues with showing the results

// request

// choosing a format of setting api key
//var request = 'https://api.openweathermap.org/data/2.5/weather?lat=28.6&lon=-80.7&appid=API';
var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b1c533b6208f0857632103b3194a00e5&q=Merritt%20City&units=metric';

// current weather
fetch(request)

// parse to JSON format
.then(function(response){
    if(!response.ok)throw Error(response.statusText);
    return response.json();
})

// render weather for day
 .then(function(response){
   console.log(response);
   onAPISucces(response);
  })

// error
.catch(function(error){
   console.error('Request failed', error);
  });


function  onAPISucces(response){

    // weather description
    var wDesc = response.weather[0].description;
    //document.getElementById("wDesc").innerHTML = wDesc.toFixed(0);

    // temperature (Celcius)
    var degreesC = Math.floor(response.main.temp - 273.15);
    //document.getElementById("degreesC").innerHTML = degreesC.toFixed(0);

    // wind
    var wind = response.wind.speed;
    //document.getElementById("wind").innerHTML = wind.toFixed(0);

    // humidity
    var humid = data.main.humidity;

    var weatherBar = document.getElementById('weather');
    //weatherBar.innerHTML = 'Weather: <br>' + wDesc + '<br>' + 'Temperature: <br>' + degreesC + '<br>' + 'Wind: <br>' + wind + '<br>' + 'Humidity: <br>' + humid;
    //weatherBox.innerHTML = wDesc + ''&#176;C <br>' + degreesC +'<br>'+ wind;

    document.getElementById('weather').innerHTML = response.name + '<br>' + wDesc + '<br>' ;


} 

// init data stream
  getAPIdata();
