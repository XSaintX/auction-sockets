import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  name = '';
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(
    public wsService: WebsocketService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.bodyTag.classList.add('my-container');
  }

  loggin() {
    let body = new URLSearchParams();
    body.set('username', this.name);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http
      .post('http://localhost:5000/checkifexists', body.toString(), options)
      .subscribe((response: any) => {
        if (response.length > 0) {
          return Swal.fire('Oops...', 'That user is connected. Choose another.', 'error')
        }
        else {
          this.wsService.loginWS(this.name)
            .then(() => {
              if (this.name === 'admin') {
                this.router.navigateByUrl('/main');
              }
              else {
                this.router.navigateByUrl('/panel');
              }
            })

        }
      });
  }

}
