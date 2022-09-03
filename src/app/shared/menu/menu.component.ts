import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    separator:true
                },
                {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },
                {
                    separator:true
                },
                {
                    label: 'No Comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'no-comunes'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog'
        }
    ];
}

}
