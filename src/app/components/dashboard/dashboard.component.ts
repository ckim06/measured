import { Component, OnInit } from '@angular/core';
import {MTableComponent} from '@shared/m-table/m-table.component';
import { DashboardFacade } from './dashboard.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
@Component({
  selector: 'm-dashboard',
  standalone: true,
  imports: [MTableComponent, AsyncPipe, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dashState$ = this.dashFacade.state$;

  constructor(private dashFacade: DashboardFacade) {}
  ngOnInit(): void {
    this.dashFacade.init();
  }

}
