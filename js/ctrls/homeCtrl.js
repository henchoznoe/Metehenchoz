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
      let time = new Date().toLocaleString("fr-fr", {timeZone: "America/New_York"});
      $('#temp-city1').html(temp + '°C' + ' / ' + time.substring(17, 12));
      $('#icon1').attr('src', json.current.condition.icon);
    });
    
  }

  weatherParis() {
    httpServ.getWeather('Paris', (json) => {
      let temp = Math.round(json.current.temp_c);
      let time = new Date().toLocaleString("fr-fr", {timeZone: "Europe/Paris"});
      $('#temp-city2').html(temp + '°C' + ' / ' + time.substring(17, 12));
      $('#icon2').attr('src', json.current.condition.icon);
    });
  }

  weatherLondon() {
    httpServ.getWeather('London', (json) => {
      let temp = Math.round(json.current.temp_c);
      let time = new Date().toLocaleString("fr-fr", {timeZone: "Europe/London"});
      $('#temp-city3').html(temp + '°C' +  ' / ' + time.substring(17, 12));
      $('#icon3').attr('src', json.current.condition.icon);
    });
  }

  events() {
    $('#link-stations-text-home').click(() => {
      indexCtrl.loadStations();
      $("#a-stations").addClass("active");
    });
  }
  
}