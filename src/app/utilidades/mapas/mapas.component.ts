import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer, icon } from 'leaflet';
import { Coordenada } from './coordenada';


@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  @Output() coordenadaSeleccionada:EventEmitter<Coordenada> = new EventEmitter<Coordenada>();
  @Input() coordenadasIniciales:Coordenada[] = [];

  capas:Marker<any>[] = [];
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(10.997599756410366, -434.79071080684673)
  };

  constructor() { }

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  manejarClick(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud});

    this.capas = [];
    this.capas.push(marker([latitud,longitud], {
      icon: icon({
        iconSize: [25,41],
        iconAnchor: [13,41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));

    this.coordenadaSeleccionada.emit({latitud:latitud, longitud:longitud})
  }

} 
