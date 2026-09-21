import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, Observable, of, map, forkJoin, takeUntil, Subject } from 'rxjs';

import { ApiService } from '../../services/api-service';
@Component({
  selector: 'app-obs-pro-component',
  imports: [],
  templateUrl: './obs-pro-component.html',
  styleUrl: './obs-pro-component.scss',
})
export class ObsProComponent implements OnInit{
  constructor(private service: ApiService){

  }
public intervalVar =  interval(1000);
public obs = new Observable(observer => { 
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
  // private destroy$ = new Subject<void>();
 

 ngOnInit(){
  this.obs.subscribe((data:any) => {
    console.log("data", data)
  });


  //  this.intervalVar.
  // pipe(
  //   takeUntil(this.destroy$)
  // ).subscribe((data:any) => {
  //   console.log("interval", data);
  // })

  // setTimeout(() => {
  //   subscription.unsubscribe(); 
  // }, 5000)

  //  this.ofObservalbleFun()
  // this.multiplicationFunction();
  // this.callApiUsingforkJoin()
 }

//  ngOnDestroy(){
//   this.destroy$.next();
//   this.destroy$.complete();
//  }


 ofObservalbleFun(){
    const obs = of(1,2,3,4);
    obs.subscribe((data:any) => {
      console.log("using of observable", data);
    })
 }

 multiplicationFunction(){
    of(1,2,3,4,5).pipe(
      map(v => v*10),
      filter(v => v > 10)
    ).subscribe((data:any) => {
      console.log("multiplication function", data)
    })
 }
 callApiUsingforkJoin(){
  
 forkJoin({
   posts :this.service.getposts(),
   users : this.service.getUserData()
 }).subscribe((results) => {
    console.log(results,'results')
 })
 }
}
