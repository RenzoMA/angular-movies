import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EntertainmentService } from '../services/entertainment.service';
import {
  TableActionTypes,
  LoadData,
  LoadDataCompleted
} from '../actions/table-actions';
import {
  map,
  mergeMap,
  startWith,
  switchMap,
  take,
  withLatestFrom
} from 'rxjs/operators';

@Injectable()
export class TableEffects {
  constructor(
    private entService: EntertainmentService,
    private actions$: Actions
  ) {}

  @Effect()
  initLoad$ = this.actions$.pipe(
    ofType<LoadData>(TableActionTypes.LoadData),
    switchMap(() => this.entService.getCatalog()),
    map(items => new LoadDataCompleted(items))
  );
}
