import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productSearched: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  getProductsSearched() {
    this.productService.searchProducts(this.productSearched).subscribe(res => console.log(res))
  }

}
