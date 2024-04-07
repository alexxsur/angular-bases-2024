import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3> {{ counter }} </h3>
  <button (click)="updateCounter(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="updateCounter(-1)">-1</button>`
})
export class CounterComponent {

  public counter: number = 10;

  updateCounter(value : number = 1):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 0;
  }

}
