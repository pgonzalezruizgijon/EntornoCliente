import { AfterViewInit, Component } from '@angular/core';

declare var bootstrap: any; // Para que TypeScript no se queje

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'proyecto038';

  ngAfterViewInit(): void {
    // El siguiente código sirve para usar los popover de Bootstrap
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map(el => new bootstrap.Popover(el));
  }
  
  aceptar() {
    alert("Ha pulsado Aceptar!");
  }

  cancelar() {
    alert("Ha pulsado Cancelar!");
  }

}
