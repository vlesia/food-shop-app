import { Component } from '@angular/core';

import { ReviewSliderComponent } from './review-slider/review-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
