import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-pelicula',
  templateUrl: './filtro-pelicula.component.html',
  styleUrls: ['./filtro-pelicula.component.css']
})
export class FiltroPeliculaComponent implements OnInit {

  public form:FormGroup;
  public generos:Array<any> = [
    { id: 1, nombre: 'Drama'},
    { id: 2, nombre: 'Comedia'},
    { id: 3, nombre: 'Ciencia ficcion'},
    { id: 4, nombre: 'Terror'}
  ];
  public peliculas:Array<any> = [
    {
      titulo: 'Spiderman',
      enCines: false,
      proximosEstrenos: true,
      generos: [3],
      poster: '../../assets/img/The_Amazing_Spider_Man.jpg'
    },
    {
      titulo: 'Silencio Mortal',
      enCines: true,
      proximosEstrenos: false,
      generos: [1,4],
      poster: '../../assets/img/silencio_mortal.jpg'
    },
    {
      titulo: 'Son como niños 2',
      enCines: false,
      proximosEstrenos: true,
      generos: [2],
      poster: '../../assets/img/son_como_ninos_2.jpg'
    }
  ]; 

  public peliculasOriginal = this.peliculas;
  public formOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  constructor(
    private formBuilder:FormBuilder,
    private location:Location,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
    .subscribe(valores =>{
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();
    })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe(params => {
      let objeto:any = {}

      if(params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos
      }
      if(params.enCines){
        objeto.enCines = params.enCines
      }

      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnURL(){
    let queryString:Array<string> = [];
    let valoresForm = this.form.value;

    if(valoresForm.titulo){
      queryString.push(`titulo=${valoresForm.titulo}`);
    }
    if(valoresForm.generoId != '0'){
      queryString.push(`generoId=${valoresForm.generoId}`);
    }
    if(valoresForm.proximosEstrenos){
      queryString.push(`proximos-estrenos=${valoresForm.proximosEstrenos}`);
    }
    if(valoresForm.enCines){
      queryString.push(`en-cines=${valoresForm.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'))
  }

  buscarPeliculas(valores:any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if(valores.generoId){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  public limpiar(){
    this.form.patchValue(this.formOriginal);
  }
}
