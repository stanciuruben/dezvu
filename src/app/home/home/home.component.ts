import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationComponent } from 'src/app/shared/main-navigation/main-navigation.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainNavigationComponent, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
