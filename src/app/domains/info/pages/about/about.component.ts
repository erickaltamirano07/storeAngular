import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CounterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(100);
  message = signal('Hello');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
