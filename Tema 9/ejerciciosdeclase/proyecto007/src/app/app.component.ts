import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  @ViewChild('selector1') selector1!: SelectornumericoComponent;
  @ViewChild('selector2') selector2!: SelectornumericoComponent;

  fijarSelector1(valor: number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor: number) {
    this.selector2.fijar(valor);
  }

  resetearHijo1() {
    this.selector1.resetear();
  }

  resetearHijo2() {
    this.selector2.resetear();
  }
}