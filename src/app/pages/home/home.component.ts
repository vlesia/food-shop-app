import { Component } from '@angular/core';

import { BestSellingProductsComponent } from "./best-selling-products/best-selling-products.component";
import { PopularProductsComponent } from "./popular-products/popular-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BestSellingProductsComponent, PopularProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
