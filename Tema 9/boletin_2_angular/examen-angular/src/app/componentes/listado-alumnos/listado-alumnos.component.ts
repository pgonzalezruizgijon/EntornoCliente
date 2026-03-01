import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoService } from '../../servicios/alumno.service';

@Component({
  selector: 'app-listado-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-alumnos.component.html'
})
export class ListadoAlumnosComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos()
      .then(datos => {
        this.alumnos = datos;
      })
      .catch(error => {
        console.error(error);
      });
  }
}