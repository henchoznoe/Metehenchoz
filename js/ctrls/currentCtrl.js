/*
  But     : currents's ctrl
  Auteur  : Noé Henchoz
  Date    : 08.06.2022 / v1.0 
*/

class CurrentCtrl {
  constructor(cityEntered) {
    this.cityEntered = cityEntered;
    this.fillAll(cityEntered);
  }

  fillAll(cityEntered) {
    httpServ.getCurrent(cityEntered, (json) => {
      $('#temperature-current').html(json.current.temp_c);
    });
  }
}
