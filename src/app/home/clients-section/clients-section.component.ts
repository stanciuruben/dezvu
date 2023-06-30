import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleComponent,
  ArticleLeftSection,
  ArticleRightSection,
} from '../../shared/ui/article/article.component';
import { SecondaryHeadingComponent } from '../../shared/ui/typography/secondary-heading/secondary-heading.component';
import { SecondaryParagraphComponent } from '../../shared/ui/typography/secondary-paragraph/secondary-paragraph.component';
import {
  IconCard,
  IconCardComponent,
} from 'src/app/shared/ui/icon-card/icon-card.component';
import {
  IncrementalCardComponent,
  IncrementalCard,
} from '../../shared/ui/incremental-card/incremental-card.component';

@Component({
  selector: 'app-clients-section',
  standalone: true,
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss'],
  imports: [
    CommonModule,
    ArticleComponent,
    ArticleLeftSection,
    ArticleRightSection,
    SecondaryHeadingComponent,
    SecondaryParagraphComponent,
    IconCardComponent,
    IncrementalCardComponent,
  ],
})
export class ClientsSectionComponent {
  cards: IconCard[] = [
    {
      name: 'Zeplin',
      alt: 'Illstration of a yellow zeppelin | Zeplin logo',
      icon: 'assets/images/zeplin-icon.png',
      bgColor: '#fbf7f0',
    },
    {
      name: 'Dropbox',
      alt: 'Illstration of a minimalist blue open box | Dropbox logo',
      icon: 'assets/images/dropbox-icon.png',
      bgColor: '#f2f6fc',
    },
    {
      name: 'Shopify',
      alt: 'Illstration of a green bag with the initial S on it | Shopify logo',
      icon: 'assets/images/shopify-icon.png',
      bgColor: '#f1ffd6',
    },
    {
      name: 'Slack',
      alt: 'Slack logo',
      icon: 'assets/images/slack-icon.png',
      bgColor: '#f5f5f5',
    },
    {
      name: 'WooCommerce',
      alt: 'Purple box with white text that says "Woo" | WooCommerce logo',
      icon: 'assets/images/woocommerce-icon.png',
      bgColor: '#fff0fc',
    },
  ];

  achievements: IncrementalCard[] = [
    {
      isThousands: false,
      number: 25,
      text: 'Years of Experience',
    },
    {
      isThousands: true,
      number: 15,
      text: 'Satisfied Clients',
    },
    {
      isThousands: true,
      number: 13,
      text: 'Projects Completed In 29 Countries',
    },
  ];
}
