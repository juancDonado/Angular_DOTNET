import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maxRating:number = 5;
  @Input() ratingSeleccionado: number = 0;
  @Output() rated:EventEmitter<number> = new EventEmitter<number>();

  maxRatingArray:Array<number> = [];
  votado:boolean = false;
  ratingAnterior: number;

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  manejarMouseEnter(index:number):void{
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave():void{
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingAnterior = 0;
    }
  }

  rate(index:number):void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
