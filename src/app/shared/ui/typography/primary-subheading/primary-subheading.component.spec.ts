import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySubheadingComponent } from './primary-subheading.component';

describe('PrimarySubheadingComponent', () => {
  let component: PrimarySubheadingComponent;
  let fixture: ComponentFixture<PrimarySubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrimarySubheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
