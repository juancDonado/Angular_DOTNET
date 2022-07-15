import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo:cineDTO = {
    nombre:'Royal Films', 
    latitud: 10.989610452913467, 
    longitud: -434.7886562347412
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log('cine ', param.id)
    });
  }

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
