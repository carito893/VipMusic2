import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent {
    constructor() { }
    cambiar = '1';
  
    modificar(numero){
      this.cambiar= numero;
    }

    ngOnInit() {
      document.getElementById('footer').classList.add("fixed-bottom");
    }


  }