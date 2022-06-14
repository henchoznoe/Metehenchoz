/*
  But     : forecast's ctrl
  Auteur  : Noé Henchoz
  Date    : 08.06.2022 / v1.0 
*/

class ForecastCtrl {

  constructor(cityEntered) {
    this.cityEntered = cityEntered;
    this.fillAll(cityEntered);
  }

  fillAll(cityEntered) {
    httpServ.getForecast(cityEntered, (json) => {
      this.fillForecast1(json);
      this.fillForecast2(json);
      this.fillForecast3(json);
      console.log(json)
    });
  }

  fillForecast1(json) {
    $('#date-1-forecast').html(new Date(json.forecast.forecastday[0].date).toDateString());
    $('#sunrise-1-forecast').html(json.forecast.forecastday[0].astro.sunrise);
    $('#sunset-1-forecast').html(json.forecast.forecastday[0].astro.sunset);
    $('#minTemp-1-forecast').html(json.forecast.forecastday[0].day.mintemp_c + '°C');
    $('#avgTemp-1-forecast').html(json.forecast.forecastday[0].day.avgtemp_c + '°C');
    $('#maxTemp-1-forecast').html(json.forecast.forecastday[0].day.maxtemp_c + '°C');
    for (let i = 0; i < (json.forecast.forecastday[0].hour).length; i++) {
      console.log('ok')
      $('#div-days-1-forecast').append('<div class="col-lg-1 col-md-3 col-sm-3 text-center">vvv</div>');
      $('#div-hour-1-forecast').append('<div class="col-lg-1 col-md-3 col-sm-3 text-center">vvvv</div>');
    }
  }

  fillForecast2(json) {
    $('#date-2-forecast').html(new Date(json.forecast.forecastday[1].date).toDateString());
    $('#sunrise-2-forecast').html(json.forecast.forecastday[1].astro.sunrise);
    $('#sunset-2-forecast').html(json.forecast.forecastday[1].astro.sunset);
  }

  fillForecast3(json) {
    $('#date-3-forecast').html(new Date(json.forecast.forecastday[2].date).toDateString());
  }

}
