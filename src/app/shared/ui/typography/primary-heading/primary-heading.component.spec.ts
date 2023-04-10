import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryHeadingComponent } from './primary-heading.component';

describe('PrimaryHeadingComponent', () => {
  let component: PrimaryHeadingComponent;
  let fixture: ComponentFixture<PrimaryHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
