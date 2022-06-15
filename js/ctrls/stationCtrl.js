/*
  But     : station's ctrl
  Auteur  : Noé Henchoz
  Date    : 31.05.2022 / v1.0 
*/

class StationCtrl {
  constructor(cityEntered) {
    this.cityEntered = cityEntered;
    this.loadCurrent(cityEntered);
    this.loadEvents();
    this.loadHead(cityEntered);
  }

  loadHead(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      $("#city-title").html(json.location.name);
      $("#city-icon").attr("src", 'https:'+json.current.condition.icon);
      $("#text-icon").html(json.current.condition.text);
    }, () => {
      indexCtrl.loadHome();
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
      if (!$("#current").hasClass("selected")) {
        $("a.items-tab").removeClass("selected");
        $("#current").addClass("selected");
        this.loadCurrent(this.cityEntered);
      }
    });
    $("#forecast").click(() => {
      if (!$("#forecast").hasClass("selected")) {
        $("a.items-tab").removeClass("selected");
        $("#forecast").addClass("selected");
        this.loadForecast(this.cityEntered);
      }
    });
    $("#map").click(() => {
      if (!$("#map").hasClass("selected")) {
        $("a.items-tab").removeClass("selected");
        $("#map").addClass("selected");
        this.loadMap(this.cityEntered);
      }
    });
  }
}
