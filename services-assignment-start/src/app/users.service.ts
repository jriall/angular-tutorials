import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  onRemoveActiveUser(index) {
    this.inactiveUsers.push(this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.counterService.increaseCount();
  }

  onRemoveInactiveUser(index) {
    this.activeUsers.push(this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
    this.counterService.increaseCount();
  }
}
