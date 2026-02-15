import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css'],
  standalone: false // Importante para que funcione en app.module.ts
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo: number = 1;
  @Input() maximo: number = 10;

  actual: number = 0;

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual < this.maximo) this.actual++;
  }

  decrementar() {
    if (this.actual > this.minimo) this.actual--;
  }

  fijar(v: number) {
    if (v >= this.minimo && v <= this.maximo) this.actual = v;
  }

  // Nuevo método solicitado
  resetear() {
    this.actual = 0;
  }
}