import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryParagraphComponent } from '../../../shared/ui/typography/primary-paragraph/primary-paragraph.component';
import { PrimaryButtonComponent } from '../../../shared/ui/primary-button/primary-button.component';
import { IconButtonComponent } from '../../../shared/ui/icon-button/icon-button.component';
import { TestimonialsSlideshowItemComponent } from '../testimonials-slideshow-item/testimonials-slideshow-item.component';

@Component({
  selector: 'app-testimonials-slideshow',
  standalone: true,
  templateUrl: './testimonials-slideshow.component.html',
  styleUrls: ['./testimonials-slideshow.component.scss'],
  imports: [
    CommonModule,
    PrimaryParagraphComponent,
    PrimaryButtonComponent,
    IconButtonComponent,
    TestimonialsSlideshowItemComponent,
  ],
})
export class TestimonialsSlideshowComponent implements AfterViewInit {
  items: Element[] = [];
  index: number = 0;
  timeout?: ReturnType<typeof setTimeout>;

  @Input() testimonials: {
    comment: string;
    name: string;
    role: string;
    company: string;
  }[] = [
    {
      comment:
        'In enim justo, rhoncus ut, imperdiet a, ven enatis vitae, justoullam dictum felis eu pede mollis pretium teger tinciduntras dapibu imperdiets Vivamus elem.',
      name: 'Mark Smith',
      role: 'CEO',
      company: 'Company',
    },
    {
      comment:
        'In enim justo, rhoncus ut, imperdiet a, ven enatis vitae, justoullam dictum felis eu pede mollis pretium teger tinciduntras dapibu imperdiets Vivamus elem.',
      name: 'Samantha Harper',
      role: 'CEO',
      company: 'Company',
    },
  ];

  clearAnimations(): void {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      item.className = 'testimonials__slideshow__content__item';
    }
  }

  resetTimer(): void {
    window.clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next.bind(this), 5000);
  }

  showNext(): void {
    this.items[this.index].classList.add('testimonial-slide-out-left');
    this.items[this.index + 1].classList.add('testimonial-slide-in-left');
    this.index++;
  }

  showPrev(): void {
    this.items[this.index].classList.add('testimonial-slide-out-right');
    this.items[this.index - 1].classList.add('testimonial-slide-in-right');
    this.index--;
  }

  showFirst(): void {
    this.items[this.index].classList.add('testimonial-slide-out-left');
    this.items[0].classList.add('testimonial-slide-in-left');
    this.index = 0;
  }

  showLast(): void {
    this.items[this.index].classList.add('testimonial-slide-out-right');
    this.items[this.items.length - 1].classList.add(
      'testimonial-slide-in-right'
    );
    this.index = this.items.length - 1;
  }

  prev(): void {
    this.clearAnimations();
    if (this.index > 0) {
      this.showPrev();
    } else {
      this.showLast();
    }
    this.resetTimer();
  }

  next(): void {
    this.clearAnimations();
    if (this.index < this.items.length - 1) {
      this.showNext();
    } else {
      this.showFirst();
    }
    this.resetTimer();
  }

  ngAfterViewInit(): void {
    this.items = Array.from(
      document.getElementsByClassName('testimonials__slideshow__content__item')
    );
    this.next();
  }
}
