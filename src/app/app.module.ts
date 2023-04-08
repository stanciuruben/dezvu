import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainNavigationComponent,
    HomeComponent,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      // { path: '404', component:  },
      // { path: '**', redirectTo: '/404', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
