import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products').pipe(
      catchError((error) => {
        return throwError(
          () =>
            new Error(
              'Something went wrong while fetching the products. Please try again later.',
            ),
        );
      }),
    );
  }
}
