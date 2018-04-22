import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBar: MatSnackBar) {
    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit() {
  }

  agregarMarcador( evento) {
    const coords: {lat: number, lng: number} = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador añadido', 'Cerrar', {duration: 1000});
  }

  borrarMarcador(id: number) {
    this.marcadores.splice(id, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Borrado ', 'Cerrar', {duration: 1000});
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores));
  }

}
