import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPathComponent } from './missing-path.component';

describe('MissingPathComponent', () => {
  let component: MissingPathComponent;
  let fixture: ComponentFixture<MissingPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MissingPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
