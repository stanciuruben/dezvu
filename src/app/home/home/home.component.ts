import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationComponent } from 'src/app/shared/main-navigation/main-navigation.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { PrimaryHeadingComponent } from 'src/app/shared/ui/typography/primary-heading/primary-heading.component';
import { SecondaryHeadingComponent } from '../../shared/ui/typography/secondary-heading/secondary-heading.component';
import { PrimaryParagraphComponent } from 'src/app/shared/ui/typography/primary-paragraph/primary-paragraph.component';
import {
  ArticleComponent,
  ArticleRightSection,
  ArticleLeftSection,
} from '../../shared/ui/article/article.component';
import { SecondaryParagraphComponent } from '../../shared/ui/typography/secondary-paragraph/secondary-paragraph.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    MainNavigationComponent,
    HomeBannerComponent,
    ArticleComponent,
    ArticleRightSection,
    ArticleLeftSection,
    PrimaryHeadingComponent,
    SecondaryHeadingComponent,
    PrimaryParagraphComponent,
    SecondaryParagraphComponent,
  ],
})
export class HomeComponent {}
