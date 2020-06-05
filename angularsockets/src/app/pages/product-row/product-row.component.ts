import { Component, Input, Output, HostBinding } from '@angular/core'
import { Product } from '../product.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input() product: Product
  @HostBinding('attr.class') cssCLass = 'item'
  private currentProduct: Product

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

}
