import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component';
import { HomeComponent } from './home/home/home.component';
import { MissingPathComponent } from './shared/missing-path/missing-path.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterModule,
        MainNavigationComponent,
        HomeComponent,
        MissingPathComponent,
        HomeBannerComponent,
        PrimaryButtonComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
