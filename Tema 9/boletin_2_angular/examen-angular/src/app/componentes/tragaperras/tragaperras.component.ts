import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tragaperras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tragaperras.component.html',
  styleUrl: './tragaperras.component.css'
})
export class TragaperrasComponent {
  @Input() credito: number = 0;
  @Output() premio = new EventEmitter<number>();
  @Output() sincredito = new EventEmitter<number>();

  iconos: string[] = ['siete.png', 'bar.png', 'campana.png','cereza.png', 'limon.png', 'naranja.png', 'platano.png','sandia.png', 'uva.png'];
  slots: string[] = ['siete.png', 'siete.png', 'siete.png'];
  mensaje: string = "";

  jugar() {
    if (this.credito < 5) {
      this.sincredito.emit(this.credito);
      this.mensaje = "SALDO INSUFICIENTE";
      return;
    }

    this.mensaje = "";
    this.credito -= 5;

    const r1 = Math.floor(Math.random() * this.iconos.length);
    const r2 = Math.floor(Math.random() * this.iconos.length);
    const r3 = Math.floor(Math.random() * this.iconos.length);

    this.slots = [this.iconos[r1], this.iconos[r2], this.iconos[r3]];
    this.comprobarPremio();
  }

  comprobarPremio() {
    let ganado = 0;
    const [a, b, c] = this.slots;

    if (a === '7.png' && b === '7.png' && c === '7.png') {
      ganado = 1000;
    } else if (a === b && b === c) {
      ganado = 20;
    } else if (a === b || a === c || b === c) {
      ganado = 5;
    }

    if (ganado > 0) {
      this.credito += ganado;
      this.premio.emit(ganado);
      this.mensaje = `¡PREMIO: ${ganado}€!`;
    }
  }
}