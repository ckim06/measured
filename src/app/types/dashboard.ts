import { ClientFullDataResponse } from './metrics';
import { Aggregates, LayoutResponse } from './field-definitions';

export interface DashboardState {
  fullDataResponse: ClientFullDataResponse;
  layoutResponse: LayoutResponse;
  aggs: Aggregates;
}
