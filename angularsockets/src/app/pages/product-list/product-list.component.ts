import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[]
  @Output() onProductSelected: EventEmitter<Product>
  private currentProduct: Product
  selling: boolean = false;

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService) {
    this.onProductSelected = new EventEmitter()
  }

  ngOnInit(): void {
    this.listen();
  }

  listen() {
    this.wsService.listen('auction-products').subscribe((product: any) => {
      if (product[0].data.length == 0) {
        this.selling = false;
      }
    })
  }

  start(product: Product) {
    this.http.get('http://localhost:5000/checklogged').subscribe(
      (res: any) => {
        if (res.length === 0) {
          return Swal.fire('Oops...', 'There are no active users!', 'error')
        }
        else if (res.length === 1) {
          return Swal.fire('Oops...', 'There is only 1 user!', 'error')
        }
        else {
          this.currentProduct = product;
          let body = new URLSearchParams();
          body.set('sku', product.sku);
          body.set('bidding', "1");
          let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          };
          this.http
            .post('http://localhost:5000/updatestate', body.toString(), options)
            .subscribe(response => {
              this.selling = true;
            });
        }
      }
    )
  }

  stop(product: Product) {
    this.currentProduct = product;
    let body = new URLSearchParams();
    body.set('sku', product.sku);
    body.set('bidding', "0");
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http
      .post('http://localhost:5000/updatestate', body.toString(), options)
      .subscribe(response => {
        this.selling = false;
      });

  }
}
