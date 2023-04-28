import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-card-promo',
  templateUrl: './card-promo.component.html',
  styleUrls: ['./card-promo.component.scss']
})
export class CardPromoComponent implements OnInit {

  @Input() promoCard!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  getPromoPrice(originalPrice:number, discount:number) {
    return (originalPrice - (originalPrice*discount)/100).toFixed(2);
  }

}
