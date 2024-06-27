import { Injectable } from '@angular/core';
import { LayoutResponse } from '@m-types/field-definitions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FieldDefinitionsService {
  constructor() {}
  getFieldDefinitions(): Observable<LayoutResponse> {
    return of({
      displayName: 'Marketing Analytics Dashboard',
      fieldDefinitions: {
        channel: {
          label: 'Channel',
          format: 'none',
          type: 'string',
          aggFn: 'none',
        },
        tactic: {
          label: 'Tactic',
          format: 'none',
          type: 'string',
          aggFn: 'none',
        },
        segment: {
          label: 'Segment',
          format: 'none',
          type: 'string',
          aggFn: 'none',
        },
        baselineSales: {
          label: 'Baseline Sales',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        percInc: {
          label: '% Incrementality',
          format: 'percent',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'none',
        },
        percSalesI: {
          label: '% Sales (i)',
          format: 'percent',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'none',
        },
        salesI: {
          label: 'Sales (i)',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        ordersI: {
          label: 'Orders (i)',
          format: 'number',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        netProfitIPerDollar: {
          label: 'Net Profit (i)/$',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'average',
        },
        totalSales: {
          label: 'Total Sales',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        totalOrders: {
          label: 'Total Orders',
          format: 'number',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        mediaSpend: {
          label: 'Media Spend',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        ordersLT: {
          label: 'Orders (LT)',
          format: 'number',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        totalSpend: {
          label: 'Total Spend',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        spend: {
          label: 'Spend',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        salesLT: {
          label: 'Sales (LT)',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-0',
          aggFn: 'sum',
        },
        cpoLT: {
          label: 'CPO (LT)',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'average',
        },
        cpoI: {
          label: 'CPO (I)',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'average',
        },
        aov: {
          label: 'AOV',
          format: 'currency',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'average',
        },
        percOrdersI: {
          label: '% Orders (i)',
          format: 'number',
          type: 'double',
          digitsInfo: '1.0-2',
          aggFn: 'average',
        },
        date: {
          label: 'Date',
          format: 'datetime',
          type: 'datetime',
          aggFn: 'none',
        },
      },
      layout: [
        {
          name: 'overallMetrics',
          type: 'DATA_POINT',
          label: 'Overall Metrics',
          width: 12,
          elements: [
            {
              name: 'mediaSpend',
              type: 'DATA_POINT',
              width: 2,
            },
            {
              name: 'percSalesI',
              type: 'DATA_POINT',
              width: 2,
            },
            {
              name: 'salesI',
              type: 'DATA_POINT',
              width: 4,
            },
            {
              name: 'cpoI',
              type: 'DATA_POINT',
              width: 2,
            },
            {
              name: 'netProfitIPerDollar',
              type: 'DATA_POINT',
              width: 2,
            },
          ],
        },
        {
          name: 'observedMetrics',
          label: 'Observed Metrics',
          type: 'DATA_POINT',
          width: 8,
          elements: [
            {
              name: 'totalOrders',
              type: 'DATA_POINT',
              width: 4,
            },
            {
              name: 'baselineSales',
              type: 'DATA_POINT',
              width: 4,
            },
            {
              name: 'totalSales',
              type: 'DATA_POINT',
              width: 4,
            },
          ],
        },
        {
          name: 'sourceMetrics',
          label: 'Source Metrics',
          type: 'DATA_POINT',
          width: 4,
          elements: [
            {
              name: 'salesLT',
              type: 'DATA_POINT',
              width: 6,
            },
            {
              name: 'cpoLT',
              type: 'DATA_POINT',
              width: 6,
            },
          ],
        },
        {
          name: 'summary',
          label: 'Summary',
          type: 'DATA_SET',
          width: 12,
          elements: [
            {
              name: 'summary',
              displayName: 'Summary',
              type: 'DATA_SET',
              width: 12,
              fields: [
                { name: 'channel' },
                { name: 'segment' },
                { name: 'tactic' },
                { name: 'totalSpend' },
                { name: 'mediaSpend' },
                { name: 'percInc' },
                { name: 'salesLT' },
                { name: 'salesI' },
                { name: 'percSalesI' },
                { name: 'ordersLT' },
                { name: 'ordersI' },
                { name: 'percOrdersI' },
              ],
            },
          ],
        },
      ],
    });
  }
}
