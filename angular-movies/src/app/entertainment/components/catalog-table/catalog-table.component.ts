import { Component, OnInit, Input } from '@angular/core';
import { CatalogItem } from '../../models/catalog-item';

@Component({
  selector: 'app-catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.scss']
})
export class CatalogTableComponent implements OnInit {

  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'Title' },
    { prop: 'Poster' },
    { prop: 'Year', sortable: false }
  ];
  @Input()
  rows: CatalogItem[] = [];
  constructor() {}

  ngOnInit() {}
}
