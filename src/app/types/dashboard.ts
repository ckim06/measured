import { ClientFullDataResponse } from './metrics';
import { LayoutResponse } from './field-definitions';

export interface DashboardState {
  fullDataResponse: ClientFullDataResponse;
  layoutResponse: LayoutResponse;
}
