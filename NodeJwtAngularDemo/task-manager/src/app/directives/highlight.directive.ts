import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    //this.element.nativeElement.style.backgroundColor = 'lightskyblue'
  }

  @HostListener('mouseover') mouseover() {
    this.element.nativeElement.style.backgroundColor = 'lightskyblue'
  }

  @HostListener('mouseout') mouseout() {
    this.element.nativeElement.style.backgroundColor = 'white'
  }
}
