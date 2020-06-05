import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.css']
})
export class SubastaComponent implements OnInit, OnDestroy {
  items: Product[] = []
  counter: string
  list: any[] = [];
  cantidaditems: Number = 0;
  getSubscription: Subscription;
  bidderSubscription: Subscription;
  countdownSubscription: Subscription;
  @Output() cantidad = new EventEmitter();
  itemsSubscription: Subscription;

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService) { }

  ngOnInit(): void {
    this.cantidaditems = Number(this.items.length)
    this.getData();
    this.listenbidSocket();
    this.startCounter();
    if (localStorage.getItem("user") === null) {
      this.wsService.logoutWS();
    }
  }

  getData() {
    this.getSubscription = this.http.get('http://localhost:5000/auctionlist').subscribe(
      (product: any) => {
        this.items = product[0].data;
        this.cantidaditems = Number(this.items.length)
      }
    )
  }

  ngOnDestroy() {
    this.getSubscription.unsubscribe();
    this.bidderSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }


  listenbidSocket() {
    this.bidderSubscription = this.wsService.listen('auction-products').subscribe((product: any) => {
      this.items = product[0].data;
      this.cantidaditems = Number(this.items.length)
    })
  }

  startCounter() {
    this.countdownSubscription = this.wsService.listen('counter').subscribe((product: any) => {
      this.counter = product;
    })
  }

}
