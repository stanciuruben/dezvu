import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleComponent,
  ArticleLeftSection,
  ArticleRightSection,
} from '../../shared/ui/article/article.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { SecondaryHeadingComponent } from '../../shared/ui/typography/secondary-heading/secondary-heading.component';
import { TestimonialsSlideshowComponent } from '../ui/testimonials-slideshow/testimonials-slideshow.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
  imports: [
    CommonModule,
    ArticleComponent,
    ArticleLeftSection,
    ArticleRightSection,
    IconComponent,
    SecondaryHeadingComponent,
    TestimonialsSlideshowComponent,
  ],
})
export class TestimonialsComponent {}
