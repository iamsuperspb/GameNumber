import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameNumber';

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onInterval(outputNumber: number) {
    if(outputNumber % 2 == 0) {
      this.evenNumbers.push(outputNumber);
    } else {
      this.oddNumbers.push(outputNumber);
    }
    console.log(outputNumber);
  }
}
