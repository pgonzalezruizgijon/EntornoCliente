import { Component, Input } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css'],
  standalone: false 
})
export class ListadoarticulosComponent {
  @Input() datos: Articulo[] = []; 
}