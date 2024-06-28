import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FieldDefinition } from '@m-types/field-definitions';

@Pipe({
  name: 'format',
  standalone: true,
})
export class FormatPipe implements PipeTransform {
  locale = 'en-US';
  transform(value: string | number, fieldDef: FieldDefinition): string {
    switch (fieldDef.format) {
      case 'none':
        return value as string;
        break;
      case 'currency':
        const currencyPipe = new CurrencyPipe(this.locale);
        return (
          currencyPipe.transform(value, 'USD', 'symbol', fieldDef.digitsInfo) ?? ''
        );
        break;
      case 'number':
        const decimalPipe = new DecimalPipe(this.locale);
        return decimalPipe.transform(value, fieldDef.digitsInfo) ?? '';
        break;
      case 'datetime':
        const datePipe = new DatePipe(this.locale);
        return datePipe.transform(value) ?? '';
        break;
      case 'percent':
        const percentPipe = new PercentPipe(this.locale);
        return percentPipe.transform(value, fieldDef.digitsInfo) ?? '';
        break;
      default:
        return value as string;
    }
  }
}
