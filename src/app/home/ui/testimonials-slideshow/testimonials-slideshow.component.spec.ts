import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsSlideshowComponent } from './testimonials-slideshow.component';
import { By } from '@angular/platform-browser';

describe('TestimonialsSlideshowComponent', () => {
  let component: TestimonialsSlideshowComponent;
  let fixture: ComponentFixture<TestimonialsSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsSlideshowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select all elements with a testimonials item class on ngAfterViewInit', () => {
    const testimonialsSlideshowItems = fixture.debugElement.queryAll(
      By.css('.testimonials__slideshow__content__item')
    );
    spyOn(component, 'next');
    spyOn(Array, 'from').and.callThrough();
    spyOn(document, 'getElementsByClassName').and.callThrough();
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component.items.length).toBe(testimonialsSlideshowItems.length);
    expect(component.next).toHaveBeenCalled();
    expect(Array.from).toHaveBeenCalled();
    expect(document.getElementsByClassName).toHaveBeenCalled();
  });

  describe('next()', () => {
    it('should increment the index if index < items.length - 1', () => {
      spyOn(component, 'ngAfterViewInit');
      component.index = 0;
      spyOn(component, 'clearAnimations');
      spyOn(component, 'showNext').and.callThrough();
      spyOn(component, 'resetTimer');
      fixture.detectChanges();
      component.next();
      fixture.detectChanges();
      expect(component.index).toBe(1);
      expect(component.clearAnimations).toHaveBeenCalled();
      expect(component.showNext).toHaveBeenCalled();
      expect(component.resetTimer).toHaveBeenCalled();
    });

    it('should set index to 0 if index === items.length - 1', () => {
      component.index = component.items.length - 1;
      spyOn(component, 'clearAnimations');
      spyOn(component, 'showFirst').and.callThrough();
      spyOn(component, 'resetTimer');
      fixture.detectChanges();
      component.next();
      fixture.detectChanges();
      expect(component.index).toBe(0);
      expect(component.clearAnimations).toHaveBeenCalled();
      expect(component.showFirst).toHaveBeenCalled();
      expect(component.resetTimer).toHaveBeenCalled();
    });
  });

  describe('prev()', () => {
    it('should decrement the index if index > 0', () => {
      component.index = 1;
      spyOn(component, 'clearAnimations');
      spyOn(component, 'showPrev').and.callThrough();
      spyOn(component, 'resetTimer');
      fixture.detectChanges();
      component.prev();
      fixture.detectChanges();
      expect(component.clearAnimations).toHaveBeenCalled();
      expect(component.showPrev).toHaveBeenCalled();
      expect(component.resetTimer).toHaveBeenCalled();
      expect(component.index).toBe(0);
    });

    it('should set index to items.length - 1 if index === 0', () => {
      component.index = 0;
      spyOn(component, 'ngAfterViewInit');
      spyOn(component, 'clearAnimations');
      spyOn(component, 'showLast').and.callThrough();
      spyOn(component, 'resetTimer');
      fixture.detectChanges();
      component.prev();
      fixture.detectChanges();
      expect(component.index).toBe(component.items.length - 1);
      expect(component.clearAnimations).toHaveBeenCalled();
      expect(component.showLast).toHaveBeenCalled();
      expect(component.resetTimer).toHaveBeenCalled();
    });
  });

  describe('resetTimer()', () => {
    it('should call clearTimeout', () => {
      spyOn(window, 'clearTimeout');
      component.resetTimer();
      expect(window.clearTimeout).toHaveBeenCalled();
    });

    it('should call setTimeout with next after 5000ms', () => {
      spyOn(window, 'setTimeout');
      component.resetTimer();
      expect(window.setTimeout).toHaveBeenCalledWith(
        jasmine.any(Function),
        5000
      );
    });
  });
});
