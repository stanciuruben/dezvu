import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryParagraphComponent } from './primary-paragraph.component';

describe('PrimaryParagraphComponent', () => {
  let component: PrimaryParagraphComponent;
  let fixture: ComponentFixture<PrimaryParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrimaryParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
