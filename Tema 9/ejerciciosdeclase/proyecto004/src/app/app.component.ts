import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  valor1: number = 1;
  valor2: number = 1;
  valor3: number = 1;
  valor4: number = 1;
  valor5: number = 1;

  mensaje = "";

  ngOnInit(): void {
    this.lanzarDados();
  }

  lanzarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.valor4 = this.generarAleatorio();
    this.valor5 = this.generarAleatorio();
    this.comprobarJugada();
  }

  comprobarJugada() {
    const suma = this.valor1 + this.valor2 + this.valor3 + this.valor4 + this.valor5;

    if (suma >= 20) {
      this.mensaje = "¡Has ganado! Suma: " + suma;
    } else {
      this.mensaje = "Sigue intentando. Suma: " + suma;
    }
  }

  generarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
}
