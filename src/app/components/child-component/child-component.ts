import { Component, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, ViewChild, AfterContentChecked, ContentChild, ElementRef, Renderer2, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnMouse } from '../../directives/on-mouse';
import { ObsProComponent } from '../obs-pro-component/obs-pro-component';
import { defer } from 'rxjs';
@Component({
  selector: 'app-child-component',
  imports: [OnMouse, ObsProComponent],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges, DoCheck, AfterContentChecked, AfterViewInit{
  @Input() user !: {
    name:string,
    age:number
  }; 
  @ContentChild('title') title !: ElementRef;
  @ViewChild('divTag') singleElement !: ElementRef;
  @ViewChildren('multipleRef') multipleElement !: QueryList<ElementRef>;
  constructor(private renderer : Renderer2,
    private cd: ChangeDetectorRef
  ){}
  ngOnChanges(changes:SimpleChanges){
    console.log(changes['user'].previousValue);
  }

 
  ngDoCheck(): void {
    console.log("change detection running")

  }

  ngAfterContentInit(): void {
    this.title.nativeElement.style.color = "red";
    console.log("project content initialted")
  }

  ngAfterContentChecked(){
    console.log("Pojected content checked");
  }

  ngAfterViewInit(){
     this.renderer.setStyle(
       this.singleElement.nativeElement,
       'background',
       'red'
     );

    this.multipleElement.forEach(element => {
      this.renderer.setStyle(element.nativeElement, 'color', 'white')
    })
    console.log(this.multipleElement)
  }
}
