function main() {

    // HTML Elements
    const astroImageEl = document.querySelector("#astro-image");
    const latitudeEl = document.querySelector("#latitude");
    const longitudeEl = document.querySelector("#longitude");
    const sunriseEl = document.querySelector("#sunrise");
    const sunsetEl = document.querySelector("#sunset");

    // URLS to fetch from
    // 'https://go-apod.herokuapp.com/apod'
    // 'https://api.sunrise-sunset.org/json'


    // Astronomical Image

    // Fetch for the astronomical image here
    // const fetchPromise = fetch('https://go-apod.herokuapp.com/apod');
    // // fetch returns a Promise object

    fetch('https://go-apod.herokuapp.com/apod')
        .then(response => response.json())
        .then(data => {
            console.log(data, "hi 1");
            astroImageEl.src = data.hdurl;
        })
        .catch(error => console.log(error));
    // Sunset/Sunrise 

    latitudeEl.innerText = `Latitude: Loading...`;
    longitudeEl.innerText = `Longitude: Loading...`;
    sunriseEl.innerText = `Sunrise: Loading...`;
    sunsetEl.innerText = `Sunrise: Loading...`;

    // use the navigator API to get your device's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('My General Position:', position);
            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            // Fetch sunrise/sunset data here
            fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=UTC&date=today`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results)
                    latitudeEl.innerText = lat;
                    longitudeEl.innerText = long;
                    longitudeEl.iner
                    sunriseEl.innerText = data.results.sunrise;
                    sunsetEl.innerText = data.results.sunset;
                })
                .catch(error => console.log(error));
        })
    }

    
}

main()