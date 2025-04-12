import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  likes: number = 0;

  addLike(): void {
    this.likes += 1;
  }

  removeLike(): void {
    this.likes -= 1;
  }
}
