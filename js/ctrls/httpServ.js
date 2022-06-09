/*
  But     : Server ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HttpServ {
  constructor() {}

  httpErrors(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = 'Pas d\'accès à la ressource serveur demandée !';
        } else if (xhr.status === 401) {
          msg = 'La clé API n\'est pas fournie ou est invalide !';
        } else if (xhr.status === 400) {
          msg = 'Erreur dans la l\'URL fournie';
        } else if (exception === '403') {
          msg = 'Le nombre de call par mois a été dépassé !';
        } else {
          msg = 'Erreur inconnue : \n' + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  loadView(vue, callback) {
    if (vue === 'footer') {
      $('#footer').load('views/' + vue + '.html', () => {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    } else {
      $('#views').load('views/' + vue + '.html', () => {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    }
  }

  loadSubView(vue, callback) {
    $('#subViews').load('views/subViews/' + vue + '.html', () => {
      if (typeof callback !== 'undefined') {
        callback();
      }
    });
  }

  getWeather(city, successCallBack) {
    $.ajax({
      url: 'https://api.weatherapi.com/v1/current.json',
      type: 'GET',
      contentType: 'application/json',
      data: {
        key: API_KEY,
        q: city,
        lang: LANGUAGE,
      },
      success: successCallBack,
    });
  }

  getForecast(city, successCallBack) {
    $.ajax({
      url: 'https://api.weatherapi.com/v1/forecast.json',
      type: 'GET',
      contentType: 'application/json',
      data: {
        key: API_KEY,
        q: city,
        lang: LANGUAGE,
      },
      success: successCallBack,
    });
  }
}
