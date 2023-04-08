import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationComponent } from 'src/app/shared/main-navigation/main-navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainNavigationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
