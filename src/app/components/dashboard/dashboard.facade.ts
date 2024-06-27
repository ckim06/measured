import { Injectable } from '@angular/core';
import { MetricsService } from '@services/metrics.service';
import { FieldDefinitionsService } from '@services/field-definitions.service';
import { BehaviorSubject, mergeMap, tap } from 'rxjs';
import { DashboardState } from '@m-types/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacade {
  initalState: DashboardState = {
    fullDataResponse: {
      dataPoints: {},
      dataSets: [],
    },
    layoutRepsonse: {
      displayName: '',
      fieldDefinitions: {},
      layout: [],
    },
  };

  stateSubject = new BehaviorSubject<DashboardState>(this.initalState);
  state$ = this.stateSubject.asObservable();

  constructor(
    private metricService: MetricsService,
    private fieldDefsService: FieldDefinitionsService
  ) {}

  init() {
    this.metricService.getMetrics().pipe(
      tap((fullDataResponse) => {
        this.stateSubject.next({
          ...this.stateSubject.value,
          fullDataResponse,
        });
      })
    ).subscribe();

    this.fieldDefsService.getFieldDefinitions().pipe(
      tap((layoutRepsonse) => {
        this.stateSubject.next({
          ...this.stateSubject.value,
          layoutRepsonse,
        });
      })
    ).subscribe();
  }
}
