import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  peliculasEnCines:Array<any>;
  peliculasEstrenos:Array<any>;
  title:string;
  ocultar:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Titulo';

    this.peliculasEnCines = [
      {
        titulo: 'Spider-man',
        fechaEstreno: new Date(),
        precio: 14.99,
        poster: '../assets/img/The_Amazing_Spider_Man.jpg'
      },
      {
        titulo: 'Moana',
        fechaEstreno: new Date(),
        precio: 11.99,
        poster: '../assets/img/Moana_official_poster.jpg'
      }
    ];

    this.peliculasEstrenos = [
      {
        titulo: 'spider-man no way home',
        fechaEstreno: new Date(),
        precio: 22.99,
        poster: '../assets/img/Spider_Man_No_Way_Home.jpg'
      }
    ];
  }

}
