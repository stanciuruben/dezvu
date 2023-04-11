import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SolutionsSectionComponent } from './solutions-section/solutions-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SolutionsSectionComponent, HeroSectionComponent],
})
export class HomeComponent {}
