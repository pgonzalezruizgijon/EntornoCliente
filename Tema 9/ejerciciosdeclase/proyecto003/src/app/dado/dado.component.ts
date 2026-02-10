import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {


  valor!:number; // = 1;

  ngOnInit(): void {
    this.valor=this.generarAleatorio();
  }

  generarAleatorio(){
    return Math.trunc(Math.random()*6)+1;
  }

}
