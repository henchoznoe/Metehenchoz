/*
  But     : stations's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationsCtrl {

  constructor(cityEntered) {
    this.cityEntered = cityEntered;
    this.loadCurrent(cityEntered);
    this.loadEvents();
    this.loadHead(cityEntered);
  }

  loadHead(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      $('#city-title').html(json.location.name);
      $('#city-icon').attr('src', json.current.condition.icon);
      $('#text-icon').html(json.current.condition.text);
      console.log(json)
    });
  }

  loadCurrent(cityEntered) {
    httpServ.loadSubView("current", () => new CurrentCtrl(cityEntered));
  }
  loadForecast(cityEntered) {
    httpServ.loadSubView("forecast", () => new ForecastCtrl(cityEntered));
  }
  loadMap(cityEntered) {
    httpServ.loadSubView("map", () => new MapCtrl(cityEntered));
  }

  loadEvents() {
    $("#current").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#current').addClass('selected');
      this.loadCurrent(this.cityEntered);
    });
    $("#forecast").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#forecast').addClass('selected');
      this.loadForecast(this.cityEntered);
    });
    $("#map").click(() => {
      $("a.items-tab").removeClass("selected");
      $('#map').addClass('selected');
      this.loadMap(this.cityEntered);
    });
  }

}
