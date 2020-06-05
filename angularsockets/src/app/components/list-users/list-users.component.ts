import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  activeusers: Observable<any>;

  constructor(
    public chat: ChatService
  ) { }

  ngOnInit(): void {
    this.activeusers = this.chat.getactiveusers()
      .pipe(map((x: any) => x.filter(z => z.username != 'admin')));

    this.chat.emitactiveusers();
  }

}
