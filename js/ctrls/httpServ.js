/*
  But     : Server ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HttpServ {
  constructor() {}

  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 401) {
          msg = "La clé API n'est pas fournie ou est invalide !";
        } else if (xhr.status === 400) {
          msg = "Erreur dans la l'URL fournie";
        } else if (exception === "403") {
          msg = "Le nombre de call par mois a été dépassé !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  chargerVue(vue, callback) {
    $("#views").load("views/" + vue + ".html", function () {
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }

  chargerFooter(vue, callback) {
    $("#footer").load("views/" + vue + ".html", function () {
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }

  getWeather(city, successCallBack) {
    $.ajax({
      url: "https://api.weatherapi.com/v1/current.json",
      type: "GET",
      contentType: "application/json",
      data: {
        key: API_KEY,
        q: city,
      },
      success: successCallBack,
    });
  }
}
