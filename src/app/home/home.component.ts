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
  observedClasses: string[] = [
    'slide-from-left',
    'slide-from-right',
    'slide-from-bottom',
    'pop-up-from-right',
    'fade-in',
  ];

  selectAllElementsToBeAnimated(): ElementToBeAnimated[] {
    let result: ElementToBeAnimated[] = [];
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
      result = result.concat(resultOfClassName);
    }
    return result;
  }

  intersectionCallback(
    elementsToBeAnimated: ElementToBeAnimated[]
  ): IntersectionObserverCallback {
    return (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      for (let index = 0; index < entries.length; index++) {
        const entry = entries[index];
        if (entry.isIntersecting) {
          let currentElement: ElementToBeAnimated;
          for (let i = 0; i < elementsToBeAnimated.length; i++) {
            if (entry.target.id === elementsToBeAnimated[i].id) {
              currentElement = elementsToBeAnimated[i];
            }
          }
          entry.target.classList.add(currentElement!.className);
          observer.unobserve(entry.target);
        }
      }
    };
  }

  ngAfterViewInit(): void {
    const elementsToBeAnimated: ElementToBeAnimated[] =
      this.selectAllElementsToBeAnimated();

    const observer = new IntersectionObserver(
      this.intersectionCallback(elementsToBeAnimated),
      {
        threshold: 0.8,
      }
    );

    for (let i = 0; i < elementsToBeAnimated.length; i++) {
      const element = elementsToBeAnimated[i];
      element.domElement.classList.remove(element.className);
      observer.observe(element.domElement);
    }
  }
}
