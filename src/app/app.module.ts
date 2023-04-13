import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component';
import { HomeComponent } from './home/home.component';
import { MissingPathComponent } from './shared/missing-path/missing-path.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainNavigationComponent,
    HomeComponent,
    MainFooterComponent,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
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
