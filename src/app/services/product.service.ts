import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.API_URL).pipe(
      map((res: any) => res.products)
    );
  }

  getProductsByCategory(category: string) {
    const API_URL_category = `${this.API_URL}/category/${category}`;

    return this.http.get(API_URL_category).pipe(
      map((res: any) => res.products)
    );
  }

  searchProducts(product: string) {
    const API_URL_search = `${this.API_URL}/search`;
    const params = {
      q: product
    };

    return this.http.get(API_URL_search, {params}).pipe(
      map((res: any) => res.products)
    );
  }
}
