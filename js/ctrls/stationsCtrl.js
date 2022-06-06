/*
  But     : stations's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationsCtrl {

    constructor() {
      
    }

    loadWeather(cityEntered) {
      httpServ.getWeather(cityEntered, (json) => {
        $('#city').html(json.location.name);
        console.log(json);
      });
      
    }
    
}