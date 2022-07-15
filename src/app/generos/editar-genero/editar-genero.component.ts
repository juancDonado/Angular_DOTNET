import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo:generoCreacionDTO = {nombre:'Drama'};

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log('genero ', param.id)
    });
  }

  guardarCambios(genero:generoCreacionDTO){
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}
