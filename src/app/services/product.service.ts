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
}
