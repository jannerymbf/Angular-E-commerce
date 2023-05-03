import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPoducts() {
    this.router.navigate(['products']);
  }
}
