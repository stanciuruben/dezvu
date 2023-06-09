import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleLeftSection,
  ArticleRightSection,
  ArticleComponent,
} from 'src/app/shared/ui/article/article.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { SecondaryHeadingComponent } from '../../shared/ui/typography/secondary-heading/secondary-heading.component';
import { PrimaryParagraphComponent } from '../../shared/ui/typography/primary-paragraph/primary-paragraph.component';
import { PrimaryButtonComponent } from '../../shared/ui/primary-button/primary-button.component';
import { IconComponent } from 'src/app/shared/ui/icon/icon.component';

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  templateUrl: './solutions-section.component.html',
  styleUrls: ['./solutions-section.component.scss'],
  imports: [
    CommonModule,
    CardComponent,
    SecondaryHeadingComponent,
    PrimaryParagraphComponent,
    PrimaryButtonComponent,
    ArticleLeftSection,
    ArticleRightSection,
    ArticleComponent,
    IconComponent,
  ],
})
export class SolutionsSectionComponent {}
