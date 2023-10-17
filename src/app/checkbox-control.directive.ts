// import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// @Directive({
//   selector: '[appCheckboxControl]',
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: CheckboxControlDirective,
//       multi: true,
//     },
//   ],
// })
// export class CheckboxControlDirective implements ControlValueAccessor {
//   private checked = false;
//   private onChange: (value: any) => void;
//   private onTouched: () => void;

//   constructor(private renderer: Renderer2, private el: ElementRef) {}

//   @Input('appCheckboxControl')
//   set value(val: any) {
//     this.checked = val;
//     this.renderer.setProperty(this.el.nativeElement, 'checked', this.checked);
//   }

//   writeValue(value: any): void {
//     this.checked = value;
//     this.renderer.setProperty(this.el.nativeElement, 'checked', this.checked);
//   }

//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }

//   @HostListener('change', ['$event.target.checked'])
//   handleChange(checked: boolean): void {
//     this.checked = checked;
//     this.onChange(this.checked);
//   }

//   @HostListener('blur')
//   handleBlur(): void {
//     this.onTouched();
//   }
// }
