import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  subject = new Subject();
  bSubject = new BehaviorSubject("a");

  constructor() { }

  ngOnInit() {
    this.subject.subscribe(value => {
      console.log("Subscription got", value);
    });
    this.subject.subscribe(value => {
      console.log("Subscription got", value);
    });
    this.bSubject.subscribe(value => {
      console.log("Subscription got", value);
    });
  }


  test1(){
    this.subject.next("test1 click");
  }

  test2(){
    this.bSubject.next("test2 click")
  }

}
