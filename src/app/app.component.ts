import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  likes: number = 0;

  addLike(): void {
    this.likes += 1;
  }

  removeLike(): void {
    this.likes -= 1;
  }
}
