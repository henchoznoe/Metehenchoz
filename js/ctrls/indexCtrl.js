/*
  But     : Main Ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

$().ready(function () {
  httpServ = new HttpServ();
  indexCtrl = new IndexCtrl();
  httpServ.httpErrors(indexCtrl.showHttpErrors);
});

class IndexCtrl {
  constructor() {
    this.loadIcon();
    this.loadHome();
    this.loadFooter();
    this.loadEvents();
  }

  // load Icon of the website
  loadIcon() {
    let heure = new Date().getHours();
    if (heure >= 8 && heure <= 20) {
      $('#icon').attr('href', 'img/sun.jpg');
    }
  }

  // show http errors
  showHttpErrors(msg) {
    //alert(msg);
  }

  // Close navbar collapse when link clicked ( to have better experience on mobile phone )
  hideNavCollapsed() {
    if ($('#navbarResponsive').hasClass('show')) {
      $('#navbarResponsive').removeClass('show');
    }
  }

  // Load views
  loadHome() {
    httpServ.loadView('home', () => new HomeCtrl());
  }
  loadFooter() {
    httpServ.loadView('footer', () => new FooterCtrl());
  }
  loadStation(city) {
    httpServ.loadView('station', () => new StationCtrl(city));
  }

  changeViewToStation(cityEntered) {
    this.hideNavCollapsed();
    this.loadStation(cityEntered);
    $('#a-station').addClass('active');
    new StationCtrl(cityEntered);
    $('#nav-in-search').val('');
  }

  loadEvents() {
    $('#a-home').click(() => {
      this.hideNavCollapsed();
      $('a.nav-link').removeClass('active');
      this.loadHome();
    });
    $('#a-station').click(() => {
      this.hideNavCollapsed();
      $('a.nav-link').removeClass('active');
      $('#a-station').addClass('active');
      this.loadStation(STATION_CITY_DEFAULT);
    });

    $('#nav-btn-search').click(() => {
      let cityEntered = $('#nav-in-search').val();
      if (cityEntered !== '' && !cityEntered.match(/[0-9]+$/)) {
        this.changeViewToStation(cityEntered);
      } else {
        console.log('Invalid characters entered : ' + cityEntered);
      }
    });

    $('#nav-in-search').keypress((event) => {
      let keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == '13') {
        event.preventDefault();
        let cityEntered = $('#nav-in-search').val();
        if (cityEntered !== '' && !cityEntered.match(/[0-9]+$/)) {
          this.changeViewToStation(cityEntered);
        } else {
          console.log('Invalid characters entered : ' + cityEntered);
        }
      }
    });

    $('#nav-btn-locate').click(() => {
      $('#nav-in-search').val('');
      this.hideNavCollapsed();
      navigator.geolocation.getCurrentPosition((position) => {
        let latLon = position.coords.latitude + ',' + position.coords.longitude;
        this.loadStation(latLon);
        $('#a-station').addClass('active');
        new StationCtrl(latLon);
      });
    });
  }
}
