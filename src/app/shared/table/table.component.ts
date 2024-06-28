import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldDefinitions } from '@m-types/field-definitions';
import { DataResponse, DatasetFields } from '@m-types/metrics';
import { TableModule } from 'primeng/table';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
@Component({
  selector: 'm-table',
  standalone: true,
  imports: [TableModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MTableComponent {
  @Input() fields: DatasetFields[] = [];
  @Input() fieldDefinitions: FieldDefinitions = {};
  @Input() data: DataResponse[] = [];

  get columns(): { name: string; label: string }[] {
    return this.fields.map((field) => {
      return {
        name: field.name,
        label: this.fieldDefinitions[field.name].label,
      };
    });
  }
}
