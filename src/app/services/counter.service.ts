import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  incrementActiveToInactive() {
    this.activeToInactive += 1;
  }

  incrementInactiveToActive() {
    this.inactiveToActive += 1;
  }
}
