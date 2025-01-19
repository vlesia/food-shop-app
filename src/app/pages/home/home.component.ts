import { Component } from '@angular/core';

import { CategoriesAndPromotionsComponent } from './categories-and-promotions/categories-and-promotions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesAndPromotionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
