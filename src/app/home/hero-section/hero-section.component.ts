import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleComponent,
  ArticleLeftSection,
  ArticleRightSection,
} from '../../shared/ui/article/article.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { PrimaryParagraphComponent } from '../../shared/ui/typography/primary-paragraph/primary-paragraph.component';
import { PrimaryButtonComponent } from '../../shared/ui/primary-button/primary-button.component';
import { PrimaryHeadingComponent } from '../../shared/ui/typography/primary-heading/primary-heading.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [
    CommonModule,
    ArticleComponent,
    ArticleLeftSection,
    CardComponent,
    ArticleRightSection,
    PrimaryParagraphComponent,
    PrimaryButtonComponent,
    PrimaryHeadingComponent,
  ],
})
export class HeroSectionComponent {}
