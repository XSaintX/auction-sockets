import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public user: User = null;
  public points: number = 0;

  constructor(
    private socket: Socket,
    private router: Router
  ) {
    this.loadStorage();
    this.checkstatus();
  }

  logoutWS() {
    this.user = null;
    localStorage.clear();
    const payload = {
      name: 'no user'
    };
    this.emit('configure-user', payload, () => { });
    this.router.navigateByUrl('');
  }

  AuctionStart() {
    const payload = {
      from: this.getUser().name
    };
    this.emit('auctionstartsocket', payload);
  }

  getUser() {
    return this.user;
  }

  checkstatus() {
    this.socket.on('connect', () => {
      this.socketStatus = true;
      this.loadStorage();
    })
    this.socket.on('disconnect', () => {
      this.socketStatus = false;
    })
  }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }
  
  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWS(name: string) {
    return new Promise((resolve, reject) => {
      this.emit('configure-user', { name }, (resp) => {
        this.points = resp.points
        this.user = new User(name);
        this.saveStorage();
        resolve();
      })
    })
  }

  saveStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.name);
    }
  }  
}
