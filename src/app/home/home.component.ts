import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SolutionsSectionComponent } from './solutions-section/solutions-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { TestimonialsComponent } from './testimonials-section/testimonials-section.component';

interface ElementToBeAnimated {
  domElement: Element;
  id: string;
  className: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    SolutionsSectionComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    TestimonialsComponent,
  ],
})
export class HomeComponent implements AfterViewInit {
  elementsToBeAnimated: ElementToBeAnimated[] = [];
  observedClasses: string[] = [
    'slide-from-left',
    'slide-from-right',
    'slide-from-bottom',
    'pop-up-from-right',
    'fade-in',
  ];

  selectElementsToBeAnimated(): void {
    for (let i = 0; i < this.observedClasses.length; i++) {
      const className = this.observedClasses[i];
      const elementsOfClassName: Element[] = Array.from(
        document.getElementsByClassName(className)
      );
      const resultOfClassName: ElementToBeAnimated[] = [];
      for (let j = 0; j < elementsOfClassName.length; j++) {
        resultOfClassName.push({
          domElement: elementsOfClassName[j],
          id: elementsOfClassName[j].id,
          className,
        });
      }
      this.elementsToBeAnimated =
        this.elementsToBeAnimated.concat(resultOfClassName);
    }
  }

  findClassName(entry: IntersectionObserverEntry): string | undefined {
    for (let i = 0; i < this.elementsToBeAnimated.length; i++) {
      if (entry.target.id === this.elementsToBeAnimated[i].id) {
        return this.elementsToBeAnimated[i].className;
      }
    }
    return undefined;
  }

  onObserve = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        let currentClassName = this.findClassName(entries[i]);
        entries[i].target.classList.add(currentClassName!);
        observer.unobserve(entries[i].target);
      }
    }
  };

  ngAfterViewInit(): IntersectionObserver {
    this.selectElementsToBeAnimated();

    const observer = new IntersectionObserver(this.onObserve, {
      threshold: 0.8,
    });

    for (let i = 0; i < this.elementsToBeAnimated.length; i++) {
      const element = this.elementsToBeAnimated[i];
      element.domElement.classList.remove(element.className);
      observer.observe(element.domElement);
    }

    return observer;
  }
}
