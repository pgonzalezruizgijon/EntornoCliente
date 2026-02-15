import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit{

  constructor(private servicioProducto:ProductosService){

  }

  ngOnInit(): void {
    this.servicioProducto.rescatarTodo().subscribe(
      datos => {
        console.log(datos);
        this.productos = datos;
      }
    )
  }

  productos:Iproducto[] = [];

}
