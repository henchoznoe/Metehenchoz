/*
  But     : Main Ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.httpErrors(indexCtrl.showHttpErrors);
});

class IndexCtrl {
  constructor() {
    this.loadIcon();
    this.loadHome();
    this.loadFooter();
    this.loadEvents();
  }

  // load Icon of the website
  loadIcon() {
    let heure = new Date().getHours();
    if (heure > 8 && heure < 20) {
      $("#icon").attr("href", "img/sun.jpg");
    }
  }

  // show http errors
  showHttpErrors(msg) {
    alert(msg);
  }

  // Close navbar collapse when link clicked ( to have better experience on mobile phone )
  hideNavCollapsed() {
    let nav = document.getElementById("navbarResponsive");
    if (nav.className.includes("show")) {
      nav.classList.remove("show");
    }
  }

  // Load views
  loadHome() {
    httpServ.loadView("home", () => new HomeCtrl());
  }
  loadStations() {
    httpServ.loadView("stations", () => new StationsCtrl());
  }
  loadFooter() {
    httpServ.loadFooter("footer", () => new FooterCtrl());
  }
  loadAbout() {
    httpServ.loadView("about", () => new AboutCtrl());
  }

  // when a city is searched in the input
  weatherSearched(cityEntered) {
    httpServ.getWeather(cityEntered, (json) => {
      /*let temp = Math.round(json.current.temp_c);
      console.log(temp);*/
      console.log(json);
    });
  }

  loadEvents() {

    $("#a-home").click(() => {
      this.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      this.loadHome();
    });
    $("#a-stations").click(() => {
      this.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      $("#a-stations").addClass("active");
      this.loadStations();
    });
    $("#a-about").click(() => {
      this.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      $("#a-about").addClass("active");
      this.loadAbout();
    });

    $("#nav-btn-search").click(() => {
      let cityEntered = $("#nav-in-search").val();
      if (cityEntered !== "" && !cityEntered.match(/[0-9]+$/)) {
        this.hideNavCollapsed();
        this.loadStations();
        $("#a-stations").addClass("active");
        this.weatherSearched(cityEntered);
        $("#nav-in-search").val("");
      } else {
        console.log("Invalid characters entered : " + cityEntered);
      }
    });

    $("#nav-in-search").keypress((event) => {
      let keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == "13") {
        event.preventDefault();
        let cityEntered = $("#nav-in-search").val();
        if (cityEntered !== "" && !cityEntered.match(/[0-9]+$/)) {
          this.hideNavCollapsed();
          this.loadStations();
          $("#a-stations").addClass("active");
          this.weatherSearched(cityEntered);
          $("#nav-in-search").val("");
        } else {
          console.log("Invalid characters entered : " + cityEntered);
        }
      }
    });
    
    $("#btn-locate-next").click(() => {
      $("#nav-in-search").val("");
      this.hideNavCollapsed();
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let latLon = lat + "," + lon;
        this.loadStations();
        $("#a-stations").addClass("active");
        this.weatherSearched(latLon);
      });
    });
  }
}
