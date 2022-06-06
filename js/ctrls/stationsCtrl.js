/*
  But     : stations's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationsCtrl {

    constructor() {
      this.events();
    }

    askAPI(result) {
      httpServ.getWeather(result, (json) => {
        console.log(json.current.temp_c);
      })
    }

    events() {
      $('#modal-locate').click(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          let result = lat + ',' + lon;
          this.askAPI(result);
        });
        
      })
    }
    
}