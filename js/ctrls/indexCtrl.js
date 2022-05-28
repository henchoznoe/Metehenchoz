/*
  But     : Classe ctrl principale
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  
  $("#a-home").click(function() {
    indexCtrl.hideNavCollapsed();
    indexCtrl.loadHome();
  });
  $("#a-forecast").click(function() {
    indexCtrl.hideNavCollapsed();
    indexCtrl.loadForecast();
  });
  $("#a-doc").click(function() {
    indexCtrl.hideNavCollapsed();
    indexCtrl.loadDoc();
  });
  $("#a-api").click(function() {
    indexCtrl.hideNavCollapsed();
    indexCtrl.loadApi();
  });
  $("#a-about").click(function () {
    indexCtrl.hideNavCollapsed();
    indexCtrl.loadAbout();
  });

});

class IndexCtrl {

  constructor() {
    this.loadHome();
    this.loadFooter();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  hideNavCollapsed() {
    let nav = document.getElementById('navbarResponsive');
    if (nav.className.includes('show')) {
      nav.classList.remove('show');
    }
  }

  loadHome() {
    httpServ.chargerVue("home", function () {new HomeCtrl();});
  }

  loadFooter() {
    httpServ.chargerFooter("footer", function () {new FooterCtrl();});
  }

  loadForecast() {
    httpServ.chargerVue("forecast", function () {new ForecastCtrl();});
  }

  loadDoc() {
    httpServ.chargerVue("doc", function () {new DocCtrl();});
  }

  loadApi() {
    httpServ.chargerVue("api", function () {new ApiCtrl();});
  }

  loadAbout() {
    httpServ.chargerVue("about", function () {new AboutCtrl();});
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
    console.log($("#abc").html());
    test($("#abc").html());
}*/