/*
  But     : about's ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class AboutCtrl {

    constructor() {
     this.showTitle();
    }
    
    showTitle() {
      document.getElementById('title').classList.add('fromLeftTitle');
    }
}