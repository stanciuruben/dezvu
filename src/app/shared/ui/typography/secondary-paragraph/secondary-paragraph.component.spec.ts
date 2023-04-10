import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryParagraphComponent } from './secondary-paragraph.component';

describe('SecondaryParagraphComponent', () => {
  let component: SecondaryParagraphComponent;
  let fixture: ComponentFixture<SecondaryParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SecondaryParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
