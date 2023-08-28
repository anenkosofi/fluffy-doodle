import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  active: string[] = ['Olivia', 'Wednesday'];
  inactive: string[] = ['Anna', 'Henry'];

  constructor(private CounterService: CounterService) {}

  setActiveUsers(index: number) {
    this.active.push(this.inactive[index]);
    this.inactive.splice(index, 1);
    this.CounterService.incrementInactiveToActive();
  }

  setInactiveUsers(index: number) {
    this.inactive.push(this.active[index]);
    this.active.splice(index, 1);
    this.CounterService.incrementActiveToInactive();
  }
}
