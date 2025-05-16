import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductComponent } from '../../../products/components/product/product.component';

@Component({
  selector: 'app-counter',
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //No ASYNC
    //Before render
    //run only once time
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

  ngOnInit() {
    //after render
    //run only once time
    //async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    //after render
    //children was pinted
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
