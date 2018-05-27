import { CounterService } from './counter.service';
import { UsersService } from './users.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  count: number;
  constructor(private usersService: UsersService,
              private counterService: CounterService) {
  }

  ngDoCheck() {
    this.count = this.counterService.count;
  }
}
