import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component';
import { HomeComponent } from './home/home/home.component';
import { MissingPathComponent } from './shared/missing-path/missing-path.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainNavigationComponent,
    PrimaryButtonComponent,
    HomeComponent,
    HomeBannerComponent,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'services', component: HomeComponent },
      { path: 'portfolio', component: HomeComponent },
      { path: 'company', component: HomeComponent },
      { path: 'blog', component: HomeComponent },
      { path: '404', component: MissingPathComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
