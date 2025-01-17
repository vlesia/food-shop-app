import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { CardComponent } from '../../../shared/card/card.component';
import { ProductService } from './../../../services/product.service';
import { Product } from '../../../models/product.model';
import { ItemListComponent } from '../../../shared/item-list/item-list.component';
import { Category, ListItem } from '../../../models/category.model';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [CardComponent, ItemListComponent],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.scss',
})
export class BestSellingProductsComponent implements OnInit {
  public products: Product[] = [];
  public categories: ListItem[] = Object.values(Category).map((name) => ({
    name,
  }));

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
