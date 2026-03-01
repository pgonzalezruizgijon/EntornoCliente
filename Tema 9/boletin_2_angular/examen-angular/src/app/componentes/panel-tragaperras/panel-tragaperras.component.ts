import { Component } from '@angular/core';
import { TragaperrasComponent } from '../tragaperras/tragaperras.component';

@Component({
  selector: 'app-panel-tragaperras',
  standalone: true,
  imports: [TragaperrasComponent],
  templateUrl: './panel-tragaperras.component.html'
})
export class PanelTragaperrasComponent {
  alertPremio(info: number) {
    alert("¡HAS GANADO UN PREMIO DE " + info + "€!");
  }
  alertSinSaldo(info: number) {
    alert("No puedes jugar. Crédito restante: " + info + "€");
  }
}