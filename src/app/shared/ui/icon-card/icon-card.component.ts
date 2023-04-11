import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '../icon/icon.component';
import { SecondarySubheadingComponent } from '../typography/secondary-subheading/secondary-subheading.component';

export interface IconCard {
  name: string;
  alt: string;
  icon: string;
  bgColor: string;
}

@Component({
  selector: 'app-icon-card',
  standalone: true,
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
  imports: [CommonModule, IconComponent, SecondarySubheadingComponent],
})
export class IconCardComponent {
  @Input() name?: IconCard['name'];
  @Input() icon?: IconCard['icon'];
  @Input() alt?: IconCard['alt'];
  @Input() bgColor?: IconCard['bgColor'];
}
