import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE= "https://ejerciciostutorialesya.com/vue/datos.php";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Inyectamos el objeto HttpClient
  constructor(private http:HttpClient) { 



  }

  // Métodos CRUD
  rescatarTodo(){
    return this.http.get<any>(`${URL_BASE}`);
  }
  /*
  altaProducto(producto){

  }
  */

}
