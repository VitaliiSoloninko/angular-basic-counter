import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  likes: number = 0;
  @Input() initValue: number = 0;

  ngOnInit(): void {
    this.likes = this.initValue;
  }

  addLike(): void {
    this.likes += 1;
  }

  removeLike(): void {
    this.likes -= 1;
  }
}
