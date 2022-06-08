/*
  But     : stations's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationsCtrl {
  constructor() {
    this.loadCurrent();
    this.loadEvents();
  }

  loadWeather(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      $('#city-title').html(json.location.name);
      console.log(json);
    });
  }

  loadCurrent() {
    httpServ.loadSubView("current", () => new CurrentCtrl());
  }
  loadForecast() {
    httpServ.loadSubView("forecast", () => new ForecastCtrl());
  }
  loadMap() {
    httpServ.loadSubView("map", () => new MapCtrl());
  }

  loadEvents() {
    $("#current").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#current').addClass('selected');
      this.loadCurrent();
    });
    $("#forecast").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#forecast').addClass('selected');
      this.loadForecast();
    });
    $("#map").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#map').addClass('selected');
      this.loadMap();
    });
  }

}
