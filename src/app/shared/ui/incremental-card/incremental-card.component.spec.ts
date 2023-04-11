import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalCardComponent } from './incremental-card.component';

describe('IncrementalCardComponent', () => {
  let component: IncrementalCardComponent;
  let fixture: ComponentFixture<IncrementalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IncrementalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
