import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  constructor() { }

  nombre:string = 'Angel';
  genero:string = 'masculino';

  cambiar(){
    if(this.genero === 'masculino'){
      this.nombre = 'Fernanda';
      this.genero = 'femenino';

    }else{
      this.genero = 'masculino';
      this.nombre = 'Angel';
    }
    
  }

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  clientes: string[] = ['Maria', 'Pedro', 'Luis', 'Juan', 'Dulce'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente en espera.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente(){
    this.clientes.length -= 1;
  }

  persona = {
    nombre: 'Angel',
    edad: 21,
    direccion: 'Apizaco, Tlaxcala'
  };

  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'batman',
      vuela: false,
    },
    {
      nombre: 'flash',
      vuela: false,
    },
  ];

  miObservable = interval(1000)
  
}
