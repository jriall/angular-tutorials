import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tick: EventEmitter<any> = new EventEmitter();
  timer = null;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  private startGame() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.count++;
        this.tick.emit(this.count);
      }, 1000);
    }
  }

  private stopGame() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
