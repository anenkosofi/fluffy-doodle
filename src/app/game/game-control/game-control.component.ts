import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() timerEvent = new EventEmitter<number>();
  public timerId: ReturnType<typeof setInterval> | undefined = undefined;
  public numbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.timerId = setInterval(() => {
      if (!this.numbers.length) {
        this.numbers.push(1);
      } else {
        this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
      }
      this.timerEvent.emit(this.numbers[this.numbers.length - 1]);
      }, 1000);
  }

  onStopGame() {
    clearInterval(this.timerId);
  }
}
