import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //title = 'proyecto004';

  valor1:number=1;
  valor2:number=1;
  valor3:number=1;

  mensaje="";

  ngOnInit(): void {
    this.lanzarDados();
  }

  lanzarDados(){
    this.valor1=this.generarAleatiorio();
    this.valor2=this.generarAleatiorio();
    this.valor3=this.generarAleatiorio();
    this.comprobarJugada();
  }

  comprobarJugada(){
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      // alert("Jugada ganadora!");
      this.mensaje="Has ganado!!";
    } else{
      // alert("Sigue intentando")
      this.mensaje ="Sigue intentando";
    }
  }

  generarAleatiorio(){
    return Math.trunc(Math.random()*6)+1;
  }

}
