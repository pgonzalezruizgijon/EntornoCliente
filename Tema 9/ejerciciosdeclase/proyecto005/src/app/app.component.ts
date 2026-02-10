import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto005';

  manejadorMultiplo10(segundos:number){
    alert("Evento!" + segundos);
  }
}
