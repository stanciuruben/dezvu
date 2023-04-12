import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SolutionsSectionComponent } from './solutions-section/solutions-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { TestimonialsComponent } from './testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    SolutionsSectionComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    TestimonialsComponent,
  ],
})
export class HomeComponent {}
