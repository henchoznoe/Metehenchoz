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
      $('#div-days-1-forecast').append('<div class="col-xl-1 col-lg-3 col-md-3 col-sm-3 col-6 text-center p-3" id="div-hours-'+(i+1)+'-forecast"></div>');
      $('#div-hours-'+(i+1)+'-forecast').append('<span class="days-hour-1-forecast" id="days-hour-'+(i+1)+'-forecast"></span><br>');
      $('#div-hours-'+(i+1)+'-forecast').append('<img id="days-icon-'+(i+1)+'-forecast"><br>');
      $('#div-hours-'+(i+1)+'-forecast').append('<span class="days-temp-1-forecast" id="days-temp-'+(i+1)+'-forecast">temp</span>');
      $('#days-hour-'+(i+1)+'-forecast').html(json.forecast.forecastday[0].hour[i].time.substring(11,16));
      $('#days-icon-'+(i+1)+'-forecast').attr('src', json.forecast.forecastday[0].hour[i].condition.icon);
      $('#days-temp-'+(i+1)+'-forecast').html(Math.round(json.forecast.forecastday[0].hour[i].temp_c) + '°C');
    }
  }

  fillForecast2(json) {
    $('#date-2-forecast').html(new Date(json.forecast.forecastday[1].date).toDateString());
    $('#sunrise-2-forecast').html(json.forecast.forecastday[1].astro.sunrise);
    $('#sunset-2-forecast').html(json.forecast.forecastday[1].astro.sunset);
    $('#minTemp-2-forecast').html(json.forecast.forecastday[1].day.mintemp_c + '°C');
    $('#avgTemp-2-forecast').html(json.forecast.forecastday[1].day.avgtemp_c + '°C');
    $('#maxTemp-2-forecast').html(json.forecast.forecastday[1].day.maxtemp_c + '°C');
  }

  fillForecast3(json) {
    $('#date-3-forecast').html(new Date(json.forecast.forecastday[2].date).toDateString());
    $('#sunrise-3-forecast').html(json.forecast.forecastday[2].astro.sunrise);
    $('#sunset-3-forecast').html(json.forecast.forecastday[2].astro.sunset);
  }

}
