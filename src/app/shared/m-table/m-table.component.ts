import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'm-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './m-table.component.html',
  styleUrl: './m-table.component.scss'
})
export class MTableComponent {

}
