import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import type PrimaryButton from '../types/primary-button';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() text: PrimaryButton['text'];
  @Input() href: PrimaryButton['href'];
  @Input() testAttribute: PrimaryButton['testAttribute'];
  @Input() type: PrimaryButton['type'];
  @Input() class: PrimaryButton['class'];
}
