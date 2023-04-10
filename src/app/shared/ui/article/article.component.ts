import { Component, Directive, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Directive({
  selector: 'app-article-left',
  standalone: true,
})
export class ArticleLeftSection {}

@Directive({
  selector: 'app-article-right',
  standalone: true,
})
export class ArticleRightSection {}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() backgroundImage?: string;
  @Input() contentBackgroundImage?: string;
  @Input() testAttribute?: string;
}
