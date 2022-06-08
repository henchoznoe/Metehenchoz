/*
  But     : stations's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationsCtrl {

  constructor(cityEntered) {
    this.cityEntered = cityEntered;
    this.loadCurrent();
    this.loadEvents();
    this.loadWeather(cityEntered);
  }

  loadWeather(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      this.fillAll(json);
    });
  }

  getLat(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      return json.location.lat;
    });
  }

  getLon(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      return json.location.lon;
    });
  }

  fillAll(json) {
    console.log(json);
    $('#city-title').html(json.location.name);
    $('#temperature').html('Température = ' + json.current.temp_c);
  }

  loadCurrent() {
    httpServ.loadSubView("current", () => new CurrentCtrl());
  }
  loadForecast() {
    httpServ.loadSubView("forecast", () => new ForecastCtrl());
  }
  loadMap(lat, lon) {
    httpServ.loadSubView("map", () => new MapCtrl(lat, lon));
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
      this.loadMap(this.getLat(this.cityEntered), this.getLon(this.cityEntered));
    });
  }

}
