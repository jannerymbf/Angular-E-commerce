import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProductDetails() {
    this.router.navigate([`./detail/${this.product.id}`])
  }

}
