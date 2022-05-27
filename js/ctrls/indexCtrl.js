/*
  But     : Classe contrôleur principale
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.centraliserErreurHttp(indexCtrl.afficherErreurHttp);

  $("#a-home").click(indexCtrl.loadHome);
  $("#a-forecast").click(indexCtrl.loadForecast);
  $("#a-documentation").click(indexCtrl.loadDocumentation);
  $("#a-api").click(indexCtrl.loadApi);
  $("#a-about").click(indexCtrl.loadAbout);
});

class IndexCtrl {
  constructor() {
    this.loadHome();
    this.loadFooter();
  }

  afficherErreurHttp(msg) {
    alert(msg);
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

  loadForecast() {
    httpServ.chargerVue("forecast", function () {
      new ForecastCtrl();
    });
  }

  loadDocumentation() {
    httpServ.chargerVue("documentation", function () {
      new ForecastCtrl();
    });
  }

  loadApi() {
    httpServ.chargerVue("api", function () {
      new ForecastCtrl();
    });
  }

  loadAbout() {
    httpServ.chargerVue("about", function () {
      new ForecastCtrl();
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
    console.log($("#abc").html());
    test($("#abc").html());
}

function reloadPage() {
    window.location.reload(true);
}*/
