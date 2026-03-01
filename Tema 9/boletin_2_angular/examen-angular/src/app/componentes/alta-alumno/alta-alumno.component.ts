import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alta-alumno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent {
  formAlumno: FormGroup;
  resultadoJson: string = "";
  private readonly API_URL = 'http://localhost/api/insertar_alumno.php';

  constructor(private fb: FormBuilder) {
    this.formAlumno = this.fb.group({
      nombre: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required],
      repetidor: [false],
      observaciones: ['']
    });
  }

  guardar() {
    if (this.formAlumno.valid) {
      const datosFormulario = this.formAlumno.value;
      this.resultadoJson = JSON.stringify(datosFormulario, null, 2);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", this.API_URL, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Respuesta del servidor:", xhr.responseText);
            alert("¡Alumno insertado con éxito mediante XMLHttpRequest!");
          } else {
            console.error("Error en la petición:", xhr.statusText);
            alert("Error al conectar con el servidor PHP.");
          }
        }
      };

      // Enviamos el JSON convertido a string
      xhr.send(JSON.stringify(datosFormulario));

    } else {
      this.resultadoJson = "";
      alert("Por favor, rellena los campos obligatorios.");
    }
  }
}