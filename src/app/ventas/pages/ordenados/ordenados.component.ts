import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styleUrls: ['./ordenados.component.css']
})
export class OrdenadosComponent {

  ordenarPor: string = '';
  mayus: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Mujer Maravilla',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo,
    },
  ];

  cambiar(){
    this.mayus = !this.mayus;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }


}
