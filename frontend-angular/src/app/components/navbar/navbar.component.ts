import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
  <header class="navbar">
    <div class="container nav-inner">
      <a class="logo" href="#inicio"><span class="logo-box">⚡</span><span>JF <b>Soluciones</b></span></a>
      <nav [class.open]="menuOpen">
        <a href="#servicios">Servicios</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
        <a href="#contacto" class="quote-btn">Cotizar Proyecto</a>
      </nav>
      <button class="hamburger" (click)="menuOpen=!menuOpen">☰</button>
    </div>
  </header>
  `
})
export class NavbarComponent { menuOpen = false; }
