import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
  <header class="navbar">
    <div class="container nav-inner">
      <a class="logo" href="#inicio"><span class="logo-box">JF</span><span>JF <b>Soluciones</b></span></a>
      <nav [class.open]="menuOpen">
        <a href="#servicios" (click)="closeMenu()">Servicios</a>
        <a href="#portafolio" (click)="closeMenu()">Portafolio</a>
        <a href="#nosotros" (click)="closeMenu()">Nosotros</a>
        <a href="#contacto" (click)="closeMenu()">Contacto</a>
        <a href="#contacto" class="quote-btn" (click)="closeMenu()">Cotizar Proyecto</a>
      </nav>
      <button class="hamburger" (click)="menuOpen=!menuOpen" [attr.aria-label]="menuOpen ? 'Cerrar menu' : 'Abrir menu'">{{ menuOpen ? '✕' : '☰' }}</button>
    </div>
  </header>
  `
})
export class NavbarComponent {
  menuOpen = false;
  closeMenu(): void { this.menuOpen = false; }
}
