import { Component, Input, OnChanges } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnChanges {
  @Input() items: { name: string }[] = [];
  @Input() title: string = '';

  public displayedItems: { name: string }[] = [];

  public ngOnChanges(): void {
    this.displayedItems = this.items.slice(0, 5);
  }

  public loadAllItems(): void {
    this.displayedItems = this.items;
  }
}
