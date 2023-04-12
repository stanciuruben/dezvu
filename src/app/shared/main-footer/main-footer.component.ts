import { Component } from '@angular/core';
import { SecondaryParagraphComponent } from '../ui/typography/secondary-paragraph/secondary-paragraph.component';
import { PrimaryButtonComponent } from '../ui/primary-button/primary-button.component';
import { PrimarySubheadingComponent } from '../ui/typography/primary-subheading/primary-subheading.component';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
  standalone: true,
  imports: [
    SecondaryParagraphComponent,
    PrimaryButtonComponent,
    PrimarySubheadingComponent,
  ],
})
export class MainFooterComponent {}
