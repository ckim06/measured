import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataResponse, DatasetFields } from '@m-types/metrics';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'm-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './m-table.component.html',
  styleUrl: './m-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MTableComponent {
  @Input() fields: DatasetFields[] = [];
  @Input() data: DataResponse[] = [];

  get columns(): string[] {
    return this.fields.map((field) => field.name);
  }
}
