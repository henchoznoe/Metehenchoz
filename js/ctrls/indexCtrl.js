/*
  But     : Main Ctrl
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.centraliserErreurHttp(indexCtrl.afficherErreurHttp);

  indexCtrl.chargerIcon();

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
  $("#a-doc").click(function () {
    indexCtrl.hideNavCollapsed();
    $("a.nav-link").removeClass("active");
    $("#a-doc").addClass("active");
    indexCtrl.loadDoc();
  });
  $("#a-api").click(function () {
    indexCtrl.hideNavCollapsed();
    $("a.nav-link").removeClass("active");
    $("#a-api").addClass("active");
    indexCtrl.loadApi();
  });
  $("#a-about").click(function () {
    indexCtrl.hideNavCollapsed();
    $("a.nav-link").removeClass("active");
    $("#a-about").addClass("active");
    indexCtrl.loadAbout();
  });
});

class IndexCtrl {
  constructor() {
    this.loadHome();
    this.loadFooter();
  }

  chargerIcon() {
    let date = new Date().getHours();
    if (date > 18 || date < 8) {
      document.getElementById("icon").href = "img/moon.png";
      
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

  loadFooter() {
    httpServ.chargerFooter("footer", function () {
      new FooterCtrl();
    });
  }

  loadStations() {
    httpServ.chargerVue("stations", function () {
      new StationsCtrl();
    });
  }

  loadDoc() {
    httpServ.chargerVue("doc", function () {
      new DocCtrl();
    });
  }

  loadApi() {
    httpServ.chargerVue("api", function () {
      new ApiCtrl();
    });
  }

  loadAbout() {
    httpServ.chargerVue("about", function () {
      new AboutCtrl();
    });
  }
}

/*function test(city) {
    $.ajax('https://api.weatherapi.com/v1/current.json', {
        type: 'GET',
        contentType: 'application/json',
        data: {
            key: 'b301c07a26014a9cbb355734222505',
            q: city,
            aqi: 'no'
        },
        success: function (data) {
            console.log(data.location)
            document.getElementById('test').innerHTML = data.location.country;

        }
    });
}

function lol() {
    console.log($('#abc').html());
    test($('#abc').html());
}*/
