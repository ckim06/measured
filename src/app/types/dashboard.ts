import { FullDataResponse } from './metrics';
import { LayoutResponse } from './field-definitions';

export interface DashboardState {
  fullDataResponse: FullDataResponse;
  layoutRepsonse: LayoutResponse;
}
