import { Component } from '@angular/core';

import { PromotionComponent } from './promotion/promotion.component';
import { ItemListComponent } from '../../../shared/item-list/item-list.component';
import { Category, ListItem } from '../../../models/category.model';

@Component({
  selector: 'app-categories-and-promotions',
  standalone: true,
  imports: [PromotionComponent, ItemListComponent],
  templateUrl: './categories-and-promotions.component.html',
  styleUrl: './categories-and-promotions.component.scss',
})
export class CategoriesAndPromotionsComponent {
  public categories: ListItem[] = Object.values(Category).map((name) => ({
    name,
  }));
}
