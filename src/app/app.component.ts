import { Component } from '@angular/core';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public username = '';
  public displayDetails = false;
  public logs: number[] = [];
  public counter = 0;

  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];

  public active: string[];
  public inactive: string[];

  constructor(private UsersService: UsersService) {
    this.active = this.UsersService.active;
    this.inactive = this.UsersService.inactive;
  }

  onResetUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.counter++;
    this.logs.push(this.counter);
  }

  onTimerEventFire(number: number) {
    if (number % 2) {
      this.oddNumbers.push(number);
    } else {
      this.evenNumbers.push(number);
    }
  }

  setActiveUser(index: number) {
    this.UsersService.setActiveUsers(index);
  }

  setInactiveUser(index: number) {
    this.UsersService.setInactiveUsers(index);
  }
}
