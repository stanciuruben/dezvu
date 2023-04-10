import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerComponent } from './home-banner.component';
import { PrimaryButtonComponent } from '../../shared/ui/primary-button/primary-button.component';
import { By } from '@angular/platform-browser';

describe('HomeBannerComponent', () => {
  let component: HomeBannerComponent;
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerComponent, PrimaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 title saying "We’re Design Trend Creators."', () => {
    const titleElement = fixture.debugElement.query(
      By.css('h1[data-test="home-banner__title"]')
    );
    expect(titleElement.nativeElement.textContent).toBe(
      "We're Design Trend Creators."
    );
  });

  it('should have a property ctaText set to "Get Started Now"', () => {
    expect(component.ctaText).toBeDefined();
    expect(component.ctaText).toBe('Get Started Now');
  });

  it('should have a link to /services#prices with the text "Get Started Now"', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('a[data-test="home-banner__cta"]')
    );
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.textContent).toContain(
      'Get Started Now'
    );
    expect(buttonElement.nativeElement.href).toContain('/services#prices');
  });
});
