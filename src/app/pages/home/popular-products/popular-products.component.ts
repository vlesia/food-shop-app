import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ItemListComponent } from '../../../shared/item-list/item-list.component';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [ItemListComponent, CardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.scss',
})
export class PopularProductsComponent implements OnInit {
  public products: Product[] = [];
  public productsList = [
    { name: 'Potatoes' },
    { name: 'Carrots' },
    { name: 'Zucchini' },
    { name: 'Blueberries' },
    { name: 'Avocados' },
    { name: 'Spinach' },
    { name: 'Tomatoes' },
    { name: 'Broccoli' },
  ];

  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    const description = this.productService.getProducts().subscribe({
      next: (val) => {
        this.products = val.slice(0, 3);
      },
      error: (err) => console.error(err),
    });

    this.destroyRef.onDestroy(() => description.unsubscribe());
  }
}
