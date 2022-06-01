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

  loadEvents() {
    $("#a-home").click(function () {
      indexCtrl.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      indexCtrl.loadHome();
    });
    $("#a-stations").click(function () {
      indexCtrl.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      $("#a-stations").addClass("active");
      indexCtrl.loadStations();
    });
    $("#a-about").click(function () {
      indexCtrl.hideNavCollapsed();
      $("a.nav-link").removeClass("active");
      $("#a-about").addClass("active");
      indexCtrl.loadAbout();
    });
    $("#nav-in-search").keypress(function () {
      console.log($("#nav-in-search").val());
    });
    $("#nav-btn-search").click(function () {
      let value = $("#nav-in-search").val();
      $("#nav-in-search").val("");
      alert("Recherche de " + value + " en cours...");
    });
  }

  api(city) {
    $.ajax("https://api.weatherapi.com/v1/current.json", {
      type: "GET",
      contentType: "application/json",
      data: {
        key: "b301c07a26014a9cbb355734222505",
        q: city,
        aqi: "no",
      },
      success: function (data) {
        document.getElementById("api-text").innerHTML = data.location.country;
        document.getElementById("api-text").innerHTML +=
          " / " + data.location.region;
      },
    });
  }

  find() {
    this.api(document.getElementById("api-input").value);
  }
}
