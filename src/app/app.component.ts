import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  max = 1;
  current = 0;
  inter: Observable<number>;

  start() {
    this.inter = interval(100);
    console.log('start');

    this.inter.pipe(
      takeWhile(_ => !this.isFinished),
      tap(console.log),
      tap(i => this.current += 0.1),
    ).subscribe();
  }

  finish() {
    this.current = this.max;
    console.log(this.inter);
  }

  reset() {
    this.current = 0;
  }

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
