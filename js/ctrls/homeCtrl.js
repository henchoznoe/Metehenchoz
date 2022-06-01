/*
  But     : home's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

    constructor() {
      this.weatherNewYork();
    }

    weatherNewYork() {
      fetch("https://api.weatherapi.com/v1/current.json?key="+ API_KEY +"&q=New York")
      .then((reponse) => reponse.json())
      .then((result) => {
        console.log(result);
      });
    }
    
}