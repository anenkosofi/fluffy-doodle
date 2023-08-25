import { Component } from '@angular/core';

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

  onResetUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.counter++;
    this.logs.push(this.counter);
  }
}
