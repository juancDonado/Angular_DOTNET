import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  @Output() OnSubmit:EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();
  @Input() modelo:PeliculaDTO;
  
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [
        Validators.required
      ]}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }

  changeMarkDown(texto:string){
    this.form.get('biografia').setValue(texto);
  }

  archivoSeleccionado(archivo:File) {
    this.form.get('poster').setValue(archivo);
  }
}
