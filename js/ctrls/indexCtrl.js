/*
  But     : Main Ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  
  constructor() {
    this.chargerIcon();
    this.loadHome();
    this.loadFooter();
    this.loadEvents();
  }

  chargerIcon() {
    let heure = new Date().getHours();
    if (heure > 8 && heure < 20) {
      document.getElementById("icon").href = "img/sun.jpg";
    }
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  hideNavCollapsed() {
    let nav = document.getElementById("navbarResponsive");
    if (nav.className.includes("show")) {
      nav.classList.remove("show");
    }
  }

  loadHome() {
    httpServ.chargerVue("home", function () {
      new HomeCtrl();
    });
  }

  loadStations() {
    httpServ.chargerVue("stations", function () {
      new StationsCtrl();
    });
  }

  loadFooter() {
    httpServ.chargerFooter("footer", function () {
      new FooterCtrl();
    });
  }

  loadAbout() {
    httpServ.chargerVue("about", function () {
      new AboutCtrl();
    });
  }

  weatherSearched(cityEntered) {
      httpServ.getWeather(cityEntered, (json) => {
        let temp = Math.round(json.current.temp_c);
        console.log(temp);
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
        this.loadStations();
        this.weatherSearched(cityEntered);
      } else {
        console.log('Invalid characters entered : ' + cityEntered);
      }
    });
    $("#nav-in-search").keypress((event) => {
      let keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == "13") {
        event.preventDefault();
        let cityEntered = $("#nav-in-search").val();
        if (cityEntered !== "" && !cityEntered.match(/[0-9]+$/)) {
          this.loadStations();
          this.weatherSearched(cityEntered);
        } else {
          console.log('Invalid characters entered : ' + cityEntered);
        }
      }
    });
 
  }

}
