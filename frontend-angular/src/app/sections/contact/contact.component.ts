import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({selector:'app-contact-section',standalone:true,imports:[FormsModule],template:`
<section id="contacto" class="section section-alt"><div class="container"><span class="badge">CONTACTO</span><h2>Comencemos a <span>trabajar juntos</span></h2><p class="section-subtitle">Cuentanos tu proyecto y nuestro equipo te responde en menos de 24 horas con una propuesta personalizada sin costo.</p>
<div class="contact-grid"><aside class="contact-panel"><h3>Informacion de contacto</h3><p>Email: <a href="mailto:contacto@jfsoluciones.cl">contacto@jfsoluciones.cl</a></p><p>Telefono: +56 9 1234 5678</p><p>Ubicacion: Santiago, Chile</p><div class="response-card"><strong>Respuesta en <24h</strong><small>Lunes a Viernes · 8:00 – 19:00 CLT</small></div></aside>
<form class="contact-form" (ngSubmit)="submit()"><input name="nombre" [(ngModel)]="form.nombre" placeholder="Tu nombre" required><input name="correo" type="email" [(ngModel)]="form.correo" placeholder="tu@empresa.com" required><input name="empresa" [(ngModel)]="form.empresa" placeholder="Nombre de tu empresa"><select name="servicio" [(ngModel)]="form.servicio"><option value="">Seleccionar servicio</option><option>Mantenimiento TI</option><option>Servidores</option><option>Desarrollo Web</option><option>Software a Medida</option><option>Automatizacion</option><option>Power Platform</option><option>Dashboards</option><option>APIs & Integraciones</option><option>Cloud</option></select><textarea name="mensaje" [(ngModel)]="form.mensaje" placeholder="Cuentanos sobre tu proyecto, desafio o necesidad tecnologica..." rows="5" required></textarea><button class="btn-primary" type="submit">Enviar mensaje ✈</button><p class="status">{{status}}</p></form>
</div></div></section>`})
export class ContactSectionComponent {
  private http = inject(HttpClient);
  form = { nombre: '', correo: '', empresa: '', servicio: '', mensaje: '' };
  status = '';
  submit() {
    this.status = 'Enviando...';
    this.http.post<{message:string}>(`${environment.apiUrl}/contact`, this.form).subscribe({
      next: (r) => { this.status = r.message; this.form = { nombre:'', correo:'', empresa:'', servicio:'', mensaje:'' }; },
      error: () => { this.status = 'No se pudo enviar. Intenta nuevamente.'; }
    });
  }
}
