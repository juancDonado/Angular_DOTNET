import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public peliculasEnCines:Array<any>;
  public peliculasEstrenos:Array<any>;

  ngOnInit(): void {

    this.peliculasEnCines = [
      {
      titulo: 'Spider-man',
      fechaEstreno: new Date(),
      precio: 14.99
      },
      {
        titulo: 'Moana',
        fechaEstreno: new Date(),
        precio: 11.99
      }
    ];
    this.peliculasEstrenos = [
      /* {
        titulo: 'spider-man no way home',
        fechaEstreno: new Date(),
        precio: 22.99
      } */
    ];
  }

  duplicarNumero(n:number):number{
    return n * 2;
  }
}
