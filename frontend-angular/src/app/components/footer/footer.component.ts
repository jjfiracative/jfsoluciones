import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="footer"><div class="container footer-grid"><div><a class="logo" href="#inicio"><span class="logo-box">⚡</span><span>JF <b>Soluciones</b></span></a><p>Transformamos la tecnologia en ventaja competitiva. Soluciones TI a medida para empresas que no se conforman con lo ordinario.</p></div><div><h4>Servicios</h4><a href="#servicios">Mantenimiento TI</a><a href="#servicios">Servidores</a><a href="#servicios">Desarrollo Web</a><a href="#servicios">Software a Medida</a><a href="#servicios">Automatizacion</a></div><div><h4>Soluciones</h4><a href="#servicios">Power Platform</a><a href="#servicios">Dashboards</a><a href="#servicios">APIs & Integraciones</a><a href="#servicios">Cloud</a><a href="#servicios">Ciberseguridad</a></div><div><h4>Empresa</h4><a href="#nosotros">Nosotros</a><a href="#portafolio">Portafolio</a><a href="#">Blog</a><a href="#">Casos de exito</a><a href="#contacto">Contacto</a></div></div><div class="container footer-bottom"><span>© 2026 JF Soluciones. Todos los derechos reservados.</span><span><i class="dot"></i> Todos los sistemas operativos</span></div></footer>
  `
})
export class FooterComponent {}
