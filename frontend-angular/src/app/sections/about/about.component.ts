import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_STATS } from '../../data/stats';

@Component({selector:'app-about-section',standalone:true,imports:[CommonModule],template:`
<section id="nosotros" class="section section-alt"><div class="container"><div class="indicator-grid"><article class="indicator-card" *ngFor="let s of stats"><h3 [style.color]="s.color">{{s.value}}</h3><p>{{s.label}}</p></article></div>
<div class="about-grid"><div><span class="badge">SOBRE NOSOTROS</span><h2>Tecnologia que <span>impulsa empresas</span></h2><p>JF Soluciones nacio para resolver un problema real: las empresas necesitan tecnologia de alta calidad pero no siempre pueden costear grandes consultoras. Llenamos ese espacio con equipo senior, procesos agiles y precios justos.</p><p>Desde Colombia, atendemos clientes en toda Latinoamerica con soluciones que van desde el soporte cotidiano hasta transformaciones digitales completas.</p></div><div class="values-list"><article><h4>Excelencia tecnica</h4><p>Aplicamos las mejores practicas y tecnologias mas avanzadas en cada solucion que entregamos.</p></article><article><h4>Comprometidos con tu negocio</h4><p>No somos solo proveedores; somos socios estrategicos que entienden tu industria y tus objetivos.</p></article><article><h4>Resultados medibles</h4><p>Cada proyecto incluye metricas de exito claras. Si no funciona, lo resolvemos, sin excusas.</p></article></div></div></div></section>`})
export class AboutSectionComponent { stats = ABOUT_STATS; }
