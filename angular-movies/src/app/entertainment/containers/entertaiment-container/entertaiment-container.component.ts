import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogItem } from '../../models/catalog-item';
import { Store } from '@ngrx/store';
import { getItems, getIsLoading } from '../../reducers';
import { LoadData } from '../../actions/table-actions';

@Component({
  selector: 'app-entertaiment-container',
  templateUrl: './entertaiment-container.component.html',
  styleUrls: ['./entertaiment-container.component.scss']
})
export class EntertaimentContainerComponent implements OnInit {
  catalogItems$: Observable<CatalogItem[]> = this.store.select(getItems);
  isLoading$: Observable<boolean> = this.store.select(getIsLoading);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadData(''));
  }
}
