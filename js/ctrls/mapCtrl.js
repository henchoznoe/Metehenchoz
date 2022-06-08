/*
  But     : map's ctrl
  Auteur  : Noé Henchoz
  Date    : 08.06.2022 / v1.0 
*/

class MapCtrl {

  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
    this.initMap(lat, lon); 
  }

  initMap(lat, lon) {

    const RED_MARKER_ICON = L.icon({
      iconUrl: "../../img/redmarkericon.png",
      iconSize: [18, 30],
      iconAnchor: [9, 30],
      popupAnchor: [0, -20],
    });
    
    const GREEN_MARKER_ICON = L.icon({
      iconUrl: "../../img/greenmarkericon.png",
      iconSize: [18, 30],
      iconAnchor: [9, 30],
      popupAnchor: [0, -20],
    });

    const mapid = L.map("mapid").setView([46.8, 7.15], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapid);

    L.marker([46.7938995, 7.1563006])
      .addTo(mapid)
      .bindPopup("Je travaille <b>ici<b>")
      .openPopup();
    L.marker([46.803154, 7.151173]).addTo(mapid).bindPopup("Gare de Fribourg");
    L.marker([46.804821, 7.154811], { icon: RED_MARKER_ICON })
      .addTo(mapid)
      .bindPopup("Mon restaurant favori");
    L.marker([46.805699, 7.1644], { icon: GREEN_MARKER_ICON })
      .addTo(mapid)
      .bindPopup("Celui du prof !<br>Restaurant du Cygne");
  }
}
