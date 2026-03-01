import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private API_URL = 'http://localhost/api';

  constructor() { }

  getAlumnos(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${this.API_URL}/get_alumnos.php`, true);
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Error al cargar alumnos");
          }
        }
      };
      xhr.send();
    });
  }

  insertarAlumno(alumno: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${this.API_URL}/insertar_alumno.php`, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Error al insertar alumno");
          }
        }
      };
      xhr.send(JSON.stringify(alumno));
    });
  }
}