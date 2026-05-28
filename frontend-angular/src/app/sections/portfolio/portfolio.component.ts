import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects';

@Component({selector:'app-portfolio-section',standalone:true,imports:[CommonModule],template:`
<section id="portafolio" class="section"><div class="container"><span class="badge badge-purple">PORTAFOLIO</span><h2>Proyectos que <span>hablan por si solos</span></h2><p class="section-subtitle">Resultados reales para empresas reales. Cada proyecto refleja nuestro compromiso con la excelencia tecnica y el impacto en el negocio.</p>
<div class="portfolio-grid"><article class="project-card" *ngFor="let p of projects"><div class="project-image"><img [src]="p.image" [alt]="p.title"><span class="category" [style.borderColor]="p.accent + '66'" [style.color]="p.accent">{{p.category}}</span></div><div class="project-content"><h3>{{p.title}}</h3><p>{{p.description}}</p><div class="chips"><span class="metric" *ngFor="let m of p.metrics" [style.color]="p.accent">{{m}}</span></div><div class="chips"><span class="tech" *ngFor="let t of p.tech">{{t}}</span></div></div></article></div>
<div class="center"><a class="cta-outline" href="#contacto">¿Tienes un proyecto en mente? Hablemos →</a></div>
</div></section>`})
export class PortfolioSectionComponent { projects = PROJECTS; }
