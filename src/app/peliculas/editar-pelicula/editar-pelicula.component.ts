import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  modelo:PeliculaDTO = {
    titulo: 'Iron man 2',
    trailer: 'abc',
    resumen: 'Pelicula gg',
    enCines: true,
    fechaLanzamiento: new Date(),
    poster: 'https://es.web.img3.acsta.net/medias/nmedia/18/84/50/16/20084857.jpg'
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log('pelicula ', param.id)
    });
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula)
  }

}
