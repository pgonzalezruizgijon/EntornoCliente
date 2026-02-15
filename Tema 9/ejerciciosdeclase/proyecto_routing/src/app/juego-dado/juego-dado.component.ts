import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './juego-dado.component.html',
  styleUrl: './juego-dado.component.css'
})
export class DadoComponent {

  @Input() valor:number=1;

}