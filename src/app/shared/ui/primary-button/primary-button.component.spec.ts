import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonComponent } from './primary-button.component';
import { By } from '@angular/platform-browser';

describe('PrimaryButtonComponent', () => {
  let component: PrimaryButtonComponent;
  let fixture: ComponentFixture<PrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('is a <button> tag', () => {
    it('should display the input property text in the element', () => {
      const testText = 'Some Text';
      component.text = testText;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(component.text).toBeDefined();
      expect(buttonElement).toBeTruthy();
      expect(buttonElement.nativeElement.textContent).toContain(testText);
    });

    it('should have the data-test attribute defined in the input', () => {
      const testAttribute = 'test-app-cta';
      component.testAttribute = testAttribute;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(
        By.css(`button[data-test="${testAttribute}"]`)
      );
      expect(component.testAttribute).toBeDefined();
      expect(buttonElement).toBeTruthy();
    });

    it('should have data-test attribute set to "app-primary-button" by default', () => {
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(component.testAttribute).toBeUndefined();
      expect(buttonElement).toBeTruthy();
    });

    it('should be of type "button" if property type is undefined', () => {
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(buttonElement).toBeTruthy();
      expect(buttonElement.nativeElement.type).toBe('button');
    });

    it('should be of type defined in the property type', () => {
      const testType = 'submit';
      component.type = testType;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(buttonElement).toBeTruthy();
      expect(buttonElement.nativeElement.type).toBe(testType);
    });

    it('should have a class of primary-button by default', () => {
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(buttonElement.nativeElement.classList).toContain('primary-button');
    });

    it('should support a class extention for the button', () => {
      const testClass = 'light';
      component.class = testClass;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(
        By.css('button[data-test="app-primary-button"]')
      );
      expect(buttonElement.nativeElement.classList).toContain(
        'primary-button--' + testClass
      );
    });
  });

  describe('is an <a> tag', () => {
    const testUrl = '/something';

    beforeEach(() => {
      component.href = testUrl;
      fixture.detectChanges();
    });

    it('should display an a tag if the href property defined', () => {
      const linkElement = fixture.debugElement.query(
        By.css('a[data-test="app-primary-button"]')
      );
      expect(component.href).toBeDefined();
      expect(linkElement).toBeTruthy();
      expect(linkElement.nativeElement.href).toContain(testUrl);
    });

    it('should have the data-test attribute defined in the input', () => {
      const testAttribute = 'test-app-cta';
      component.testAttribute = testAttribute;
      fixture.detectChanges();
      const linkElement = fixture.debugElement.query(
        By.css(`a[data-test="${testAttribute}"]`)
      );
      expect(component.testAttribute).toBeDefined();
      expect(linkElement).toBeTruthy();
    });

    it('should have data-test attribute set to "app-primary-button" by default', () => {
      const linkElement = fixture.debugElement.query(
        By.css(`a[data-test="app-primary-button"]`)
      );
      expect(component.testAttribute).toBeUndefined();
      expect(linkElement).toBeTruthy();
    });

    it('should have a class of primary-button by default', () => {
      const linkElement = fixture.debugElement.query(
        By.css('a[data-test="app-primary-button"]')
      );
      expect(linkElement.nativeElement.classList).toContain('primary-button');
    });

    it('should support a class extention for the link', () => {
      const testClass = 'light';
      component.class = testClass;
      fixture.detectChanges();
      const linkElement = fixture.debugElement.query(
        By.css('a[data-test="app-primary-button"]')
      );
      expect(linkElement.nativeElement.classList).toContain(
        'primary-button--' + testClass
      );
    });
  });
});
