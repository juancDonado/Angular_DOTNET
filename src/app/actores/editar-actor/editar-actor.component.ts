import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actores';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit, OnDestroy {

  modelo:actorDTO = {
    nombre:'Juan', 
    fechaNacimiento: new Date(),
    foto: 'https://i.pinimg.com/736x/ef/c6/23/efc623194c8f17ac5d7507fbb197e554.jpg'
  };

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      //console.log('actor ', param.id)
    });
  }

  ngOnDestroy(): void {
      
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }

}
