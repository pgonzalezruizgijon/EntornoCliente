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
      const datosJson = JSON.stringify(this.formAlumno.value);

      alert(datosJson);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://ruix.iesruizgijon.es/pgonzalez/angular/examen_angular/api/insertar_alumno.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("Respuesta del servidor:", xhr.responseText);
        }
      };

      xhr.send(datosJson);
    } else {
      alert("Formulario no válido");
    }
  }
}