import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
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

  generosNoSeleccionados:MultipleSelectorModel[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Accion' },
    { llave: 3, valor: 'Terror' },
    { llave: 4, valor: 'Comedia' }
  ];

  generosSeleccinados:MultipleSelectorModel[] = [];

  cinesNoSeleccinados:MultipleSelectorModel[] = [
    {llave: 1, valor: 'Royal Films'},
    {llave: 2, valor: 'Cine Colombia'},
    {llave: 3, valor: 'CineMark'}
  ];

  cinesSeleccionados:MultipleSelectorModel[] = [];

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
      poster: '',
      generosId: '',
      cinesId: ''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    console.log(this.generosSeleccinados);
    const generosIds = this.generosSeleccinados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  changeMarkDown(texto){
    this.form.get('resumen').setValue(texto);
  }

  archivoSeleccionado(archivo:File) {
    this.form.get('poster').setValue(archivo);
  }
}
