import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss',
})
export class PromotionComponent {}
