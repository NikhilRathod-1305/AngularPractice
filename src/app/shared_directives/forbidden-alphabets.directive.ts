import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForbiddenAlphabets]'
})
export class ForbiddenAlphabetsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any): void {
    const initialValue = this.el.nativeElement.value;
    const sanitizedValue = initialValue.replace(/[^0-9]/g, ''); // Allow only numbers
    if (sanitizedValue.length !== 10) {
      // Enforce exactly 10 digits
      this.el.nativeElement.value = sanitizedValue.slice(0, 10); // Truncate if longer
    } else if (initialValue !== sanitizedValue) {
      this.el.nativeElement.value = sanitizedValue;
    }
  }
}
 