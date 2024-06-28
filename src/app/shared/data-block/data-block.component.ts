import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { FieldDefinition } from '@m-types/field-definitions';

@Component({
  selector: 'm-data-block',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './data-block.component.html',
  styleUrl: './data-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MDataBlockComponent {
  @HostBinding('style.width') @Input() width: string = '';
  @Input() fieldDefinition!: FieldDefinition;
  @Input() value?: string | number;
}
