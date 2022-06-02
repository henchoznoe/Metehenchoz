/*
  But     : home's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

  constructor() {
    this.events();
    this.weatherNewYork();
    this.weatherParis();
    this.weatherLondon();
  }

  weatherNewYork() {
    httpServ.getWeather('New York', (json) => {
      let temp = Math.round(json.current.temp_c);
      $('#temp-city1').html(temp + '°C');
      $('#icon1').attr('src', json.current.condition.icon);
    });
  }

  weatherParis() {
    httpServ.getWeather('Paris', (data) => {
      let temp = Math.round(data.current.temp_c);
      $('#temp-city2').html(temp + '°C');
      $('#icon2').attr('src', data.current.condition.icon);
    });
  }

  weatherLondon() {
    httpServ.getWeather('London', (data) => {
      let temp = Math.round(data.current.temp_c);
      $('#temp-city3').html(temp + '°C');
      $('#icon3').attr('src', data.current.condition.icon);
    });
  }

  events() {
    $('#link-stations-text-home').click(() => {
      indexCtrl.loadStations();
    });
  }
}
