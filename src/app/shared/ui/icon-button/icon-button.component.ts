import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import PrimaryButton from '../../types/button';

export interface IconButton extends Omit<PrimaryButton, 'class'> {
  class?: 'rotated';
  src?: string;
  hoverSrc?: string;
  callback?: Function;
}

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() hoverSrc!: IconButton['hoverSrc'];
  @Input() src!: IconButton['src'];
  @Input() href: IconButton['href'];
  @Input() testAttribute: IconButton['testAttribute'];
  @Input() type: IconButton['type'];
  @Input() class?: IconButton['class'];
  @Input() callback?: IconButton['callback'];

  onClick(): void {
    if (this.callback) {
      this.callback();
    }
  }
}
