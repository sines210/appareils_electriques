import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval, Subscription } from 'rxjs';
// import 'rxjs/Rx';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy{

  @Input() secondes!: number;
  @Input() counterSubscription!: Subscription;


  constructor() {
   
 }

 ngOnInit() {

  //  const counter = Observable.interval(1000);
     const counter = interval(1000);

    this.counterSubscription = counter.subscribe((value:number)=>{
      this.secondes=value})

 }

 ngOnDestroy() {
   this.counterSubscription.unsubscribe()
 }

}
