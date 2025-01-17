import { Category } from './../../../models/category.enum';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { CardComponent } from '../../../shared/card/card.component';
import { ProductService } from './../../../services/product.service';
import { Product } from '../../../models/product.model';
import { ItemListComponent } from "../../../shared/item-list/item-list.component";

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [CardComponent, ItemListComponent],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.scss',
})
export class BestSellingProductsComponent implements OnInit {
  public products: Product[] = [];
  public categories = Object.values(Category).map((name) => ({ name }));

  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    const description = this.productService.getProducts().subscribe({
      next: (val) => {
        this.products = val.slice(0, 3);
        console.log(val);
      },
      error: (err) => console.error(err),
    });

    this.destroyRef.onDestroy(() => description.unsubscribe());
  }
}
