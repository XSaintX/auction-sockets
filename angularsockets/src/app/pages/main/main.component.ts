import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit {
  products: Product[]
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
    
    this.bodyTag.classList.add('my-container');
    this.getData();
    this.statusitem();
  }

  getData() {
    this.http.get('http://localhost:5000/productlist').subscribe(
      (product: any) => {
        this.products = product[0].data;
      }
    )
  }

  statusitem() {
    this.wsService.listen('change-state').subscribe((product: any) => {
      this.products = product[0].data;
    })
  }

  exit() {
    let body = new URLSearchParams();
    body.set('username', 'admin');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http
      .post('http://localhost:5000/logout', body.toString(), options)
      .subscribe((response: any) => {
        
      });
    this.wsService.logoutWS();
  }
}
