import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldDefinition } from '@m-types/field-definitions';

@Component({
  selector: 'm-data-block',
  standalone: true,
  imports: [],
  templateUrl: './m-data-block.component.html',
  styleUrl: './m-data-block.component.scss'
})
export class MDataBlockComponent {
  @Input() width: number = 0;
  @Input() fieldDefinition!: FieldDefinition;
  @Input() value?: string | number;
}
