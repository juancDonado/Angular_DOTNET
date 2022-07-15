import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actores';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  @Input() modelo:actorDTO;

  @Output() OnSubmit:EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();
 

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [
        Validators.required
      ]],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  changeMarkDown(texto:string){
    this.form.get('biografia').setValue(texto);
  }

}
