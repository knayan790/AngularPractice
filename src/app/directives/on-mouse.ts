import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnMouse]',
  standalone: true
})
export class OnMouse {
  constructor(private el : ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter')
  onEnter(){
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'green'
    )
  }
}
