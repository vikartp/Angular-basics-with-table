import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[my-active]'
})
export class MyActiveDirective {

  constructor(private _element: ElementRef) {}

  @HostListener('mouseover')
  rftgr() {
    this._element.nativeElement.style.backgroundColor = 'red';
    // this._element.nativeElement.classList.add('active');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this._element.nativeElement.classList.remove('active');
  }
}