/*
  But     : home's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

    constructor() {
      this.weatherNewYork();
      this.weatherParis();
      this.weatherLondon();
      this.events();
    }

    weatherNewYork() {
      let info = document.getElementById('temp-city1');
      let icon = document.getElementById('icon1');
      fetch("https://api.weatherapi.com/v1/current.json?key="+ API_KEY +"&q=New York")
      .then((reponse) => reponse.json())
      .then((result) => {
        let temp = Math.round(result.current.temp_c);
        info.innerHTML = temp + "°C";
        icon.src = result.current.condition.icon;
      });
      fetch('https://worldtimeapi.org/api/timezone/America/New_York')
      .then((reponse) => reponse.json())
      .then((result) => {
        let hour = result.datetime.substring(16,11);
        info.innerHTML += " / " + hour;
      });
    }

    weatherParis() {
      let info = document.getElementById('temp-city2');
      let icon = document.getElementById('icon2');
      fetch("https://api.weatherapi.com/v1/current.json?key="+ API_KEY +"&q=Paris")
      .then((reponse) => reponse.json())
      .then((result) => {
        let temp = Math.round(result.current.temp_c);
        info.innerHTML = temp + "°C";
        icon.src = result.current.condition.icon;
      });
      fetch('https://worldtimeapi.org/api/timezone/Europe/Paris')
      .then((reponse) => reponse.json())
      .then((result) => {
        let hour = result.datetime.substring(16,11);
        info.innerHTML += " / " + hour;
      });
    }

    weatherLondon() {
      let info = document.getElementById('temp-city3');
      let icon = document.getElementById('icon3');
      fetch("https://api.weatherapi.com/v1/current.json?key="+ API_KEY +"&q=London")
      .then((reponse) => reponse.json())
      .then((result) => {
        let temp = Math.round(result.current.temp_c);
        info.innerHTML = temp + "°C";
        icon.src = result.current.condition.icon;
      });
      fetch('https://worldtimeapi.org/api/timezone/Europe/London')
      .then((reponse) => reponse.json())
      .then((result) => {
        let hour = result.datetime.substring(16,11);
        info.innerHTML += " / " + hour;
      });
    }

    events() {
      $('#link-stations-text-home').click( () => {
        indexCtrl.loadStations();
      });
    }

}