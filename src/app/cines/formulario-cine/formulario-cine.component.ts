import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapas/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  @Output() guardarCambios:EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();
  @Input() modelo:cineCreacionDTO;

  form:FormGroup;
  coordenadaInicial:Coordenada[] = [];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [
        Validators.required
      ]}],
      latitud: ['', { validators: [
        Validators.required
      ]}],
      longitud: ['', { validators: [
        Validators.required
      ]}]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
      console.log(this.coordenadaInicial);
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada:Coordenada){
    this.form.patchValue(coordenada);
  }

}
