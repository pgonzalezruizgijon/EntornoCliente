import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: false,
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {

  segundo = 0;
  @Input() inicio: number = 0;
  @Output() finalcountdown: EventEmitter<void> = new EventEmitter();
  private intervalo: any;

  iniciar() {
    this.segundo = this.inicio;

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }

    this.intervalo = setInterval(() => {
      this.segundo--;

      if (this.segundo <= 0) {
        clearInterval(this.intervalo);
        this.segundo = 0;
        this.finalcountdown.emit();
      }

    }, 1000);
  }

}
