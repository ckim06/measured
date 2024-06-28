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

export interface DatasetFields {
  name: string;
}

export interface ClientDatasetResponse {
  [index: string]: DataResponse[];
}

export interface ClientFullDataResponse {
  dataPoints: DataResponse;
  dataSets: ClientDatasetResponse;
}
