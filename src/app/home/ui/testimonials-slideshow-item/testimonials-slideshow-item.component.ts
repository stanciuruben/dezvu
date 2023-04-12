import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryParagraphComponent } from '../../../shared/ui/typography/primary-paragraph/primary-paragraph.component';

@Component({
  selector: 'app-testimonials-slideshow-item',
  standalone: true,
  templateUrl: './testimonials-slideshow-item.component.html',
  styleUrls: ['./testimonials-slideshow-item.component.scss'],
  imports: [CommonModule, PrimaryParagraphComponent],
})
export class TestimonialsSlideshowItemComponent {
  @Input() comment?: string;
  @Input() name?: string;
  @Input() role?: string;
  @Input() company?: string;
}
