import { CatalogItem } from '../models/catalog-item';
import { TableActionTypes, TableActions } from '../actions/table-actions';

export interface State {
  items: CatalogItem[];
  isLoading: boolean;
}

const initialState: State = {
  items: [],
  isLoading: false
};

export function tableReducer(
  state = initialState,
  action: TableActions
): State {
  switch (action.type) {
    case TableActionTypes.LoadData:
      return { ...state, isLoading: true };
    case TableActionTypes.LoadDataCompleted:
      return { ...state, isLoading: false, items: action.payload };
    default:
      return state;
  }
}

export const getItems = (state: State) => state.items;
export const getIsLoading = (state: State) => state.isLoading;
