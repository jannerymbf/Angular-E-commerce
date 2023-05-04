import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: string;
  productCard!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.getSingleProduct(this.id).subscribe((res: any) => {
      return this.productCard = res;
    });
  }
}
