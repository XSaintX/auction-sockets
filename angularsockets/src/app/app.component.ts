import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{// implements OnInit
  constructor(
    public wsService: WebsocketService,
    public chatService: ChatService
  ) { }
  title = 'auction web';

  ngOnInit() {
    
  }
}
