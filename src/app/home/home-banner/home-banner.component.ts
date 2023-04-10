import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/ui/primary-button/primary-button.component';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  imports: [CommonModule, PrimaryButtonComponent],
})
export class HomeBannerComponent {
  ctaText: string = 'Get Started Now';
}
