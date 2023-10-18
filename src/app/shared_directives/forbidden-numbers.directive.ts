import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForbiddenNumbers]'
})
export class ForbiddenNumbersDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any): void {
    const initialValue = this.el.nativeElement.value;
    const sanitizedValue = initialValue.replace(/[^A-Za-z]/g, ''); // Allow only alphabetic characters and spaces
    if (sanitizedValue.length !== 30) {

      this.el.nativeElement.value = sanitizedValue.slice(0, 30); // Truncate if longer
    } else if (initialValue !== sanitizedValue) {
      this.el.nativeElement.value = sanitizedValue;
      event.preventDefault();
    }
  }
}
