import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { MainNavigationComponent } from './main-navigation.component';

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the logo should be on the page', () => {
    const logoImage = fixture.nativeElement.querySelector(
      '[data-test="main-nav__logo"]'
    );
    expect(logoImage).toBeTruthy();
  });

  it('should have a toggle button', () => {
    const toggleButton = fixture.nativeElement.querySelector(
      '[data-test="main-nav__menu-toggle"]'
    );
    expect(toggleButton).toBeTruthy();
    expect(toggleButton.textContent).toBe('Open main menu');
  });

  it('should have an isMenuOpen property', () => {
    expect(component.isMenuOpen).toBeDefined();
  });

  it('should call toggleMenu() on toggle button click and change isMenuOpen', fakeAsync(() => {
    const isMenuOpen = Boolean(component.isMenuOpen);
    spyOn(component, 'toggleMenu').and.callThrough();
    const toggleButton = fixture.debugElement.nativeElement.querySelector(
      '[data-test="main-nav__menu-toggle"]'
    );
    toggleButton.click();
    tick();
    expect(component.toggleMenu).toHaveBeenCalledTimes(1);
    expect(isMenuOpen).not.toBe(component.isMenuOpen);
  }));

  it('should have a list of links as property with at least 3 links', () => {
    expect(component.links).toBeDefined();
    expect(component.links.length).toBeGreaterThanOrEqual(3);
  });
});
