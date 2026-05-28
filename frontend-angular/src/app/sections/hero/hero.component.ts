import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { HERO_STATS } from '../../data/stats';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section id="inicio" class="hero tech-bg">
    <canvas #networkCanvas class="network-canvas"></canvas>
    <div class="container">
      <span class="badge">◆ SOLUCIONES TECNOLOGICAS EMPRESARIALES</span>
      <h1>Transformamos tu <span>infraestructura digital</span></h1>
      <p>Somos especialistas en mantenimiento TI, servidores, desarrollo de software, automatizacion y soluciones cloud. Llevamos la tecnologia al siguiente nivel para que tu negocio no se detenga.</p>
      <div class="hero-actions"><a href="#contacto" class="btn-primary">Cotizar ahora</a><a href="#servicios" class="btn-ghost">Ver servicios</a></div>
      <div class="stats-grid">
        <article class="stat-card" *ngFor="let stat of stats"><h3 [style.color]="stat.color">{{stat.value}}</h3><p>{{stat.label}}</p></article>
      </div>
      <button class="scroll-hint" (click)="scrollToServices()">SCROLL ↓</button>
    </div>
  </section>`
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  stats = HERO_STATS;
  private rafId = 0;
  private particles: Array<{x:number;y:number;vx:number;vy:number;r:number}> = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000));
      this.particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 1
      }));
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const distMax = 160;

      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const a = this.particles[i];
          const b = this.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < distMax) {
            const alpha = (1 - d / distMax) * 0.24;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of this.particles) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(6,182,212,0.75)';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      this.rafId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  scrollToServices(): void {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
  }
}
