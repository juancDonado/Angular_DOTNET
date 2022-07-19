import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  @ViewChild(MatTable) table:MatTable<any>

  control:FormControl = new FormControl();
  actores = [
    {
      nombre: 'Tom Holland', 
      personaje: '',
      foto: 'https://i.ebayimg.com/images/g/IEoAAOSwlIZfsMuS/s-l500.jpg'
    },
    {
      nombre: 'Tom Hanks', 
      personaje: '',
      foto: 'https://assets.afcdn.com/stars/fan/tom-hanks/tom-hanks-20060620-138633.jpg'
    },
    {
      nombre: 'Tom Hardy', 
      personaje: '',
      foto: 'https://m.media-amazon.com/images/I/51UmG11TtyL._AC_SY580_.jpg'
    },
    {
      nombre: 'Densel Washington',
      personaje: '', 
      foto: 'https://i.ebayimg.com/images/g/ZuAAAOSweW5U8M~f/s-l500.jpg'
    }
  ]
  actoresOriginal = this.actores;
  actoresSeleccionados = [];
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];


  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }

  optionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre == actor.nombre)
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }

}
