import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './sections/hero/hero.component';
import { ServicesSectionComponent } from './sections/services/services.component';
import { AboutSectionComponent } from './sections/about/about.component';
import { PortfolioSectionComponent } from './sections/portfolio/portfolio.component';
import { ContactSectionComponent } from './sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, ServicesSectionComponent, AboutSectionComponent, PortfolioSectionComponent, ContactSectionComponent, FooterComponent],
  template: `<app-navbar></app-navbar><main><app-hero-section></app-hero-section><app-services-section></app-services-section><app-about-section></app-about-section><app-portfolio-section></app-portfolio-section><app-contact-section></app-contact-section></main><app-footer></app-footer>`
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      }
    }, { threshold: 0.15 });

    document.querySelectorAll('.section, .stat-card, .indicator-card, .service-card, .project-card, .contact-panel, .contact-form').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = Math.min(window.scrollY * 0.18, 120);
    document.documentElement.style.setProperty('--scroll-parallax', `${y}px`);
  }
}
