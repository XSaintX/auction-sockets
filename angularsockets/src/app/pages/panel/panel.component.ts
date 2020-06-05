import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatService } from 'src/app/services/chat.service';
import { CountdownComponent } from 'ngx-countdown';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PanelComponent implements OnInit, AfterContentChecked {
  public isOn: boolean = false;
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(
    public wsService: WebsocketService,
    private http: HttpClient,
    public chatService: ChatService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.bodyTag.classList.add('my-container');
    this.getData()
    this.listen()
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getData() {
    this.http.get('http://localhost:5000/auctionlist').subscribe(
      (product: any) => {
        if (product[0].data.length > 0) {
          this.isOn = true;
        }
        else {
          this.isOn = false;
        }
      }
    )
  }

  listen() {
    this.wsService.listen('auction-products').subscribe((product: any) => {
      console.log('auction-products')
      console.log(product)
      if (product[0].data.length > 0) {
        if (product[0].data[0].price == 0) {
          this.isOn = false;
        }
        else {
          this.isOn = true;
        }
      }
      else {
        this.isOn = false;
      }
    })
  }

  out() {
    let body = new URLSearchParams();
    body.set('username', this.wsService.user.name);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    this.http
      .post('http://localhost:5000/logout', body.toString(), options)
      .subscribe((response: any) => {

      });
    this.wsService.logoutWS();
  }

  AuctionStart() {
    this.wsService.AuctionStart();
  }

}
