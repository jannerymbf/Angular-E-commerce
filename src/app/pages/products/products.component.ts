import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  category: string = '';

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    // this.showSearchedProducts();
  }

  getProducts() {
    if(this.router.url === '/products') {
      //to show all products
      this.productService.getAllProducts().subscribe((res: any) => {
        return this.products = res;
      })
    } else {
      // to show serached products
      this.route.params.subscribe(params => {
        return this.productService.searchProducts(params['searchProduct']).subscribe(res => {
          return this.products = res;
        })
      })
    }
  }

  getCategories() {
    let allCategories: any[] = [];
    this.productService.getAllProducts().subscribe((res) => {
      allCategories = res.map((e: any) => e.category);
      this.categories = [...new Set(allCategories)];
    })
  }

  getProductsBycategory(category: string) {
    if(category == '') {
      return this.getProducts();
    } else {
      return this.productService.getProductsByCategory(category).subscribe((res) => {
        return this.products = res;
      })
    }
  }

  // showSearchedProducts() {
  //   return this.route.params.subscribe(params => {
  //     return this.productService.searchProducts(params['searchProduct']).subscribe(res => {
  //       return this.products = res;
  //     })
  //   })
  // }

}
