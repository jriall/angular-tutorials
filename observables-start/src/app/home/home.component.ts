import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => console.log(number)
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('This does not work');
        observer.complete();
      }, 5000);
      // Test to show that nothing is emited after completion
      setTimeout(() => {
        observer.next('This is never called as it happens after completion');
      }, 6000);
    });
    myObservable.subscribe(
      // Observables take three arguments
      (data: string) => console.log(data), // 1. success
      (error: string) => console.log(error), // 2. error
      () => console.log('completed!'), // 3. completion
    );
  }

}
