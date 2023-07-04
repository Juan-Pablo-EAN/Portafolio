import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgrounds]'
})
export class BackgroundsDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onScroll() {
    this.moveBackground();
  }
  moveBackground() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-position-y', `${(window.scrollY / 7) - 400}px`);
  }

}
