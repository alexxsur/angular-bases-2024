import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Mi App Angular 2024';
  public counter: number = 10;

  updateCounter(value : number = 1):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 0;
  }


}
