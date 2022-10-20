document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = '9f6775d0501bfeb651cc6efcaf868354';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        })
}

function cityWeather(e) {
    weatherDataFetch('Tallinn')
}
