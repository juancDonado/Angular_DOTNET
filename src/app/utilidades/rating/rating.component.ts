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

  public maxRatingArray:Array<number> = [];
  public votado:boolean = false;
  public ratingAnterior: number;

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  public manejarMouseEnter(index:number):void{
    this.ratingSeleccionado = index + 1;
  }

  public manejarMouseLeave():void{
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingAnterior = 0;
    }
  }

  public rate(index:number):void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
