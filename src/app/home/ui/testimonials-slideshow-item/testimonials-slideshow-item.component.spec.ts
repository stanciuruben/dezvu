import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsSlideshowItemComponent } from './testimonials-slideshow-item.component';

describe('TestimonialsSlideshowItemComponent', () => {
  let component: TestimonialsSlideshowItemComponent;
  let fixture: ComponentFixture<TestimonialsSlideshowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestimonialsSlideshowItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsSlideshowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
