import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    return this.productService.getAllProducts().subscribe((res: any) => {
      return this.products = res;
    })
  }

  getCategories() {
    let allCategories: any[] = [];
    this.productService.getAllProducts().subscribe((res) => {
      allCategories = res.map((e: any) => e.category);
      this.categories = [...new Set(allCategories)];
    })
  }

}
