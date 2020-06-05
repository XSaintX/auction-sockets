import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

  subastandosocket() {
    const payload = {
      from: this.wsService.getUser().name
    };    
    this.wsService.emit('subastandosocket', payload);
  }

  getactiveusers() {
    return this.wsService.listen('active-users');
  }

  emitactiveusers(){
    this.wsService.emit('get-users');
  }

}
