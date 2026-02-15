import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto002';

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0,
    categoria: ""
  }

  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55, categoria: 'alimentación' },
    { codigo: 2, descripcion: 'manzanas', precio: 12.10, categoria: 'alimentación' },
    { codigo: 3, descripcion: 'melon', precio: 52.30, categoria: 'alimentación' },
    { codigo: 4, descripcion: 'cebollas', precio: 17, categoria: 'alimentación' },
    { codigo: 5, descripcion: 'calabaza', precio: 20, categoria: 'hogar' },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(codigo: number) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }

    if (this.art.categoria.trim() === "") {
      alert('Debe ingresar una categoría');
      return;
    }

    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('Ya existe un articulo con dicho codigo');
        return;
      }

    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
      categoria: this.art.categoria
    });

    this.limpiarFormulario();
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; categoria: string; }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
    this.art.categoria = art.categoria;
  }

  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        this.articulos[x].categoria = this.art.categoria;
        this.limpiarFormulario();
        return;
      }

    alert('No existe el código de articulo ingresado');
  }

  limpiarFormulario() {
    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
    this.art.categoria = "";
  }
}
