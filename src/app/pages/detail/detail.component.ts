import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: string;
  productCard: any = {};
  // productCard!: Product; --> se está demorando en cargar y sale error

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.getSingleProduct(this.id).subscribe((res: any) => {
      return this.productCard = res;
    });
  }

  shareOnFacebook(){
    const url = window.location.href;
    // const url = '/' + this.route.pathFromRoot.map(r => r.snapshot.url).filter(f => !!f[0]).map(([f]) => f.path).join('/')
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(navUrl , '_blank');
  }

  shareOnTwitter() {
    // const url = this.route.snapshot.firstChild;
    const url = window.location.href;
    const navUrl = 'https://twitter.com/intent/tweet?text=' + url;
    window.open(navUrl, '_blank');
  }
}
