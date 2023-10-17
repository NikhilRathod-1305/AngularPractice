import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForbiddenAlphabets]'
})
export class ForbiddenAlphabetsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any): void {
    const initialValue = this.el.nativeElement.value;
    const sanitizedValue = initialValue.replace(/[^0-9]/g, ''); // Allow only numbers
    if (initialValue !== sanitizedValue) {
      this.el.nativeElement.value = sanitizedValue;
      event.preventDefault();
    }
  }
}
