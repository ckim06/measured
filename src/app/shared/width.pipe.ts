import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'width',
  standalone: true,
})
export class WidthPipe implements PipeTransform {
  transform(width: number): string {
    if (!isNaN(width)) {
      return `${width * 4}em`;
    } else {
      return '8em';
    }
  }
}
