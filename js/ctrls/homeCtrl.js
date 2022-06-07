/*
  But     : home's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

  constructor() {
    this.events();
    this.loadWeather('New York', '#icon1', '#temp-city1', 'America/New_York');
    this.loadWeather('Paris', '#icon2', '#temp-city2', 'Europe/Paris');
    this.loadWeather('London', '#icon3', '#temp-city3', 'Europe/London');
  }

  loadWeather(city, whereIcon, whereTemp, timeZone) {
    httpServ.getWeather(city, (json) => {
      let temp = Math.round(json.current.temp_c);
      let time = new Date().toLocaleString('fr-fr', {timeZone: timeZone});
      $(whereTemp).html(temp + '°C' +  ' / ' + time.substring(17, 12));
      $(whereIcon).attr('src', json.current.condition.icon);
    });
  }

  events() {
    $('#link-stations-text-home').click(() => {
      indexCtrl.loadStations();
      $('#a-stations').addClass('active');
    });
  }
  
}