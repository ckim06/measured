export interface FieldDefinitions {
  [index: string]: FieldDefinition;
}

export type Format = 'datetime' | 'currency' | 'percent' | 'number' | 'none';
export type Type = 'string' | 'double' | 'datetime';

export interface FieldDefinition {
  label: string;
  format: Format;
  type: Type;
  digitsInfo?: string;
  aggFn: 'none' | 'sum' | 'average';
}

export interface LayoutResponse {
  displayName: string;
  fieldDefinitions: FieldDefinitions;
  layout: ElementGroup[];
}
export interface ElementGroup {
  name: string;
  label: string;
  type: ElementType;
  width: number;
  elements: Element[];
}

interface Element {
  name: string;
  type: ElementType;
  displayName?: string;
  width: number;
  fields?: DatasetFields[];
}
interface DatasetFields {
  name: string;
}
export type ElementType = 'DATA_POINT' | 'DATA_SET';
