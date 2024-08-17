import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  counter = 1;

  increaseBy(value:number) : void
  {
    if(this.counter > 0 && this.counter + value > 0)
    {
      this.counter = this.counter + value;
    }
  }

  public reset()
  {
    this.counter = 1;
  }


}
