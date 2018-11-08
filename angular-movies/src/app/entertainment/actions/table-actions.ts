import { Action } from '@ngrx/store';
import { CatalogItem } from '../models/catalog-item';
export enum TableActionTypes {
  LoadData = '[Entertainment] Load Data',
  LoadDataCompleted = '[Entertainment] LoadDataCompleted'
}

export class LoadData implements Action {
  readonly type = TableActionTypes.LoadData;

  constructor(public payload: string) {}
}

export class LoadDataCompleted implements Action {
  readonly type = TableActionTypes.LoadDataCompleted;

  constructor(public payload: CatalogItem[]) {}
}

export type TableActions = LoadData | LoadDataCompleted;
