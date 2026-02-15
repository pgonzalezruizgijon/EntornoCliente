import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  
  constructor(private router: Router) {}

  navegarDado() {
    this.router.navigate(['/dado']);
  }

  navegarCronometro() {
    this.router.navigate(['/cronometro']);
  }

  navegarSelector() {
    this.router.navigate(['/selector']);
  }
}