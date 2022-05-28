/*
  But     : 
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022 / v1.0 
*/

class AboutCtrl {

    constructor() {
     this.afficherTitre();
    }
    
    afficherTitre() {
      let move = document.getElementById('title');
      move.className += " move";
    }
}