import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySubheadingComponent } from './secondary-subheading.component';

describe('SecondarySubheadingComponent', () => {
  let component: SecondarySubheadingComponent;
  let fixture: ComponentFixture<SecondarySubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SecondarySubheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondarySubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
