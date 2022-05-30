/*
  But     : home's ctrl
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022 / v1.0 
*/

class HomeCtrl {

    constructor() {

      $("#api-input").keyup(function(event) {
        if($('#api-input').val() != null){
          $.ajax("https://api.weatherapi.com/v1/search.json", {
            type: "GET",
            contentType: "application/json",
            data: {
              key: "b301c07a26014a9cbb355734222505",
              q: $('#api-input').val()
            },
            success: function (data) {
              console.log(data);
            },
          });
        }
      });
      
    }
    
}