import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import * as fromTable from '../reducers/table-reducer';

export interface TableState {
	table: fromTable.State;
}

export const reducers: ActionReducerMap<TableState> = {
  table: fromTable.tableReducer
};

export const getEntModuleState = createFeatureSelector<TableState>('entertainment');
export const getEntState = createSelector(getEntModuleState, state => state.table);
export const getItems = createSelector(getEntState, fromTable.getItems);
export const getIsLoading = createSelector(getEntState, fromTable.getIsLoading);
