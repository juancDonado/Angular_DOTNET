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
    foto: 'https://img.huffingtonpost.com/asset/61caf8022100001cf5702819.jpg?cache=cdMDvfgL2C&ops=crop_677_406_4305_2564%2Cscalefit_720_noupscale'
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
