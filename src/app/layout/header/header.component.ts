import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SearchFilterComponent } from './search-filter/search-filter.component';
import { Category, CategoryItem, SubCategory } from '../../models/category.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchFilterComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public categories = [
    {
      label: Category.BAKERY,
      subCategories: [{ name: SubCategory.BAKERY }],
      isOpen: false,
    },
    {
      label: Category.FRUIT_AND_VEGETABLES,
      subCategories: [{ name: SubCategory.VEGETABLES }],
      isOpen: false,
    },

    {
      label: Category.MEAT_AND_FISH,
      subCategories: [{ name: SubCategory.FISH }, { name: SubCategory.MEAT }],
      isOpen: false,
    },
    {
      label: Category.DRINKS,
      subCategories: [{ name: SubCategory.DRINKS }],
      isOpen: false,
    },
    {
      label: Category.KITCHEN,
      subCategories: [{ name: SubCategory.KITCHEN }],
      isOpen: false,
    },
    {
      label: Category.SPECIAL_NUTRITION,
      subCategories: [{ name: SubCategory.SPECIAL_NUTRITION }],
      isOpen: false,
    },
    {
      label: Category.BABY,
      subCategories: [],
      isOpen: false,
    },
    {
      label: Category.PHARMACY,
      subCategories: [],
      isOpen: false,
    },
  ];

  @HostListener('document:click', ['$event'])
  public clickOutside(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.nav-item');
    if (!clickedInside) {
      this.categories.forEach((category) => (category.isOpen = false));
    }
  }

  public toggleDropdown(category: CategoryItem): void {
    category.isOpen = !category.isOpen;
  }

  public closeDropdown(category: CategoryItem): void {
    category.isOpen = false;
  }
}
