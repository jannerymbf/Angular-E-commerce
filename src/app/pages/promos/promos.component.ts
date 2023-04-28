import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {

  promoProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPromoProducts();
  }

  getPromoProducts() {
    return this.productService.getAllProducts().subscribe((res: any) => {
      this.promoProducts = res.filter((e: any) => e.discountPercentage > 15)
      return this.promoProducts;
    })
  }
}
