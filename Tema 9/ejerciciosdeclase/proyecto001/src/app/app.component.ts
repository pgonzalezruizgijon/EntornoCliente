import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';

  nombre="Antonio";
  edad=13;
  sueldos=[1000,1500,2000];
  activado=true;

  provincias=[

    {id:1,nombre:"Huelva"},
    {id:2,nombre:"Sevilla"},
    {id:3,nombre:"Córdoba"},
    {id:4,nombre:"Jaen"},

  ]

  contador=1;

  incremetarContrador(){

    this.contador++;

  }


  decrementarContrador(){

    this.contador--;

  }


  enActivo(){

    return this.activado?"En activo":"En paro";

  }

  cumplirMayoria(){

    this.edad=18;
    this.sueldos.push(Math.random()*2000000000000000000000000000000000000000000000);
    this.nombre = "Oscar Wild"
  }

  constructor(){

  }

}
