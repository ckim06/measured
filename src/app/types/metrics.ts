export interface DataResponse {
  [index: string]: string | number;
}

export interface DatasetResponse {
  name: string;
  data: DataResponse[];
}

export interface FullDataResponse {
  dataPoints: DataResponse;
  dataSets: DatasetResponse[];
}
