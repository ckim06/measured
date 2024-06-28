import { Injectable } from '@angular/core';
import { MetricsService } from '@services/metrics.service';
import { FieldDefinitionsService } from '@services/field-definitions.service';
import { BehaviorSubject, forkJoin, reduce, tap } from 'rxjs';
import { DashboardState } from '@m-types/dashboard';
import { ClientFullDataResponse, FullDataResponse } from '@m-types/metrics';
import { Aggregates } from '@m-types/field-definitions';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacade {
  initalState: DashboardState = {
    fullDataResponse: {
      dataPoints: {},
      dataSets: {},
    },
    layoutResponse: {
      displayName: '',
      fieldDefinitions: {},
      layout: [],
    },
    aggs: {},
  };

  stateSubject = new BehaviorSubject<DashboardState>(this.initalState);
  state$ = this.stateSubject.asObservable();

  constructor(
    private metricService: MetricsService,
    private fieldDefsService: FieldDefinitionsService
  ) {}

  init() {
    const getMetrics$ = this.metricService.getMetrics().pipe(
      tap((fullDataResponse) => {
        this.stateSubject.next({
          ...this.stateSubject.value,
          fullDataResponse: this.mapFullDataResponse(fullDataResponse),
        });
      })
    );

    const getFieldDefs$ = this.fieldDefsService.getFieldDefinitions().pipe(
      tap((layoutResponse) => {
        this.stateSubject.next({
          ...this.stateSubject.value,
          layoutResponse,
        });
      })
    );
    forkJoin([getMetrics$, getFieldDefs$]).pipe(
      tap(([, layoutResponse]) => {
        const aggs: Aggregates = {};
        let fieldNames:string[];
        layoutResponse.layout.forEach((layout) => {
          if(layout.type === 'DATA_SET'){
            layout.elements.forEach((element) => {
               fieldNames = element.fields?.map((field) => field.name) ?? [];
            });

            const dataset = this.stateSubject.value.fullDataResponse.dataSets[layout.name];
            fieldNames.forEach((field) => {
              const aggFn = layoutResponse.fieldDefinitions[field].aggFn;
              
              if(aggFn != 'none') {
                const sum = dataset.reduce((partialSum, row) => partialSum + (row[field] as number), 0);
                if(!aggs[layout.name]) {
                  aggs[layout.name] = {};
                }
                aggs[layout.name][field] = sum;

                if(aggFn === 'average') {
                  aggs[layout.name][field] = sum / dataset.length;
                }
              }
            }); 
          }
        });
        this.stateSubject.next({
          ...this.stateSubject.value,
          aggs,
        });
      })
    ).subscribe();
  }

  mapFullDataResponse(
    fullDataResponse: FullDataResponse
  ): ClientFullDataResponse {
    const clientFullData = {
      ...this.initalState.fullDataResponse,
      dataPoints: fullDataResponse.dataPoints,
    };
    fullDataResponse.dataSets.forEach((set) => {
      clientFullData.dataSets[set.name] = set.data;
    });
    return clientFullData;
  }
}
