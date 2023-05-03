import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productSearched: string = '';
  // @Output() newItemEvent = new EventEmitter<string>();

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productSearched = params['searchProduct'];
    })
  }

  // getProductsSearched() {
  //   this.productService.searchProducts(this.productSearched).subscribe(res => {
  //       this.router.navigateByUrl('/products').then(() => {
  //         this.newItemEvent.emit(res);
  //       });
  //   })
  // }

  searchProduct() {
    // this.router.navigateByUrl('/products').then(() => {
    //   this.newItemEvent.emit(this.productSearched);
    // });
    this.router.navigateByUrl('/search/' + this.productSearched);
  }

}
