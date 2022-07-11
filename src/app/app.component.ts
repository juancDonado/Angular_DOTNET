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

    setTimeout(()=>{
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
    }, 2000);
    setTimeout(()=>{
      this.peliculasEstrenos = [
        {
          titulo: 'spider-man no way home',
          fechaEstreno: new Date(),
          precio: 22.99
        }
      ];
    }, 2500);
  }

  duplicarNumero(n:number):number{
    return n * 2;
  }
}
