import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() text: string | undefined;
  @Input() href: string | undefined;
  @Input() dataAttribute: string | undefined;
  @Input() type: string | undefined;
  @Input() class: string | undefined;
}
