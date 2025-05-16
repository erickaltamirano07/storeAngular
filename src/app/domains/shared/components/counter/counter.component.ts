import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //No ASYNC
    //Before render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(chahes: SimpleChanges) {
    //No ASYNC
    //Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(chahes);
  }
}
