import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto014';

  nombre = 'Pablo';
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
  fechaActual = new Date();
}
