import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MTableComponent} from '@shared/table/table.component';
import { DashboardFacade } from './dashboard.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MDataBlockComponent } from '@shared/data-block/data-block.component';
import { MHeaderComponent } from '@shared/header/header.component';
import { WidthPipe } from '@shared/width.pipe';


@Component({
  selector: 'm-dashboard',
  standalone: true,
  imports: [MTableComponent, MDataBlockComponent, AsyncPipe, JsonPipe, MHeaderComponent, WidthPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  dashState$ = this.dashFacade.state$;

  constructor(private dashFacade: DashboardFacade) {}
  ngOnInit(): void {
    this.dashFacade.init();
  }

}
