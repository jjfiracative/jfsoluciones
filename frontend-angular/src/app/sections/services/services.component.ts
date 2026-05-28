import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/services';

@Component({selector:'app-services-section',standalone:true,imports:[CommonModule],template:`
<section id="servicios" class="section">
<div class="container"><span class="badge">NUESTROS SERVICIOS</span><h2>Todo lo que tu empresa <span>necesita en TI</span></h2><p class="section-subtitle">Desde soporte diario hasta transformacion digital completa.</p>
<div class="services-grid"><article class="service-card" *ngFor="let s of services"><div class="service-icon">⚙</div><h3>{{s.title}}</h3><p>{{s.description}}</p></article></div></div></section>`})
export class ServicesSectionComponent { services = SERVICES; }
