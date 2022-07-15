import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  modelo:PeliculaCreacionDTO = {
    titulo: 'Iron man 2',
    trailer: 'abc',
    resumen: 'Pelicula gg',
    enCines: true,
    fechaLanzamiento: new Date()
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log('pelicula ', param.id)
    });
  }

}
