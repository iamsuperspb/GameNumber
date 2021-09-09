import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() intervalNumber = new EventEmitter<number>();

  counter: any;
  lastNumber: number = 0;
  isPaused: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onStart() {
    this.counter = setInterval(() => {
      this.intervalNumber.emit(this.lastNumber + 1);
      this.lastNumber++;
    } ,1000)
  }

  onPause() {
    this.isPaused = true;
    clearInterval(this.counter);
  }

  onReset() {
    this.lastNumber = 0;
    clearInterval(this.counter);
  }

  isDisable() {
    if(this.lastNumber == 0) {
      return true;
    } else {
      return false;
    }
  }

}
