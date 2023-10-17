import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date, format: string = 'ddMMyyyy'): string {
    if (!value) return '';
    return new Date(value).toLocaleDateString('en-GB', {
      day: format.includes('dd') ? '2-digit' : undefined,
      month: format.includes('MM') ? '2-digit' : undefined,
      year: format.includes('yyyy') ? 'numeric' : undefined,
    });
  }
}
