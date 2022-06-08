/*
  But     : home's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

  constructor() {
    this.events();
    this.loadWeather(HOME_CITY1, '#icon1', '#temp-city1', 'America/New_York');
    this.loadWeather(HOME_CITY2, '#icon2', '#temp-city2', 'Europe/Paris');
    this.loadWeather(HOME_CITY3, '#icon3', '#temp-city3', 'Europe/London');
  }

  loadWeather(city, whereIcon, whereTemp, timeZone) {
    httpServ.getWeather(city, (json) => {
      let time = new Date().toLocaleString('fr-fr', {timeZone: timeZone});
      $(whereTemp).html(Math.round(json.current.temp_c) + '°C' +  ' / ' + time.substring(17, 12));
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