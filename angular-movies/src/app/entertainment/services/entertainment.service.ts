import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogItem } from '../models/catalog-item';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EntertainmentService {
  constructor(private http: HttpClient) {}

  public getCatalog(): Observable<CatalogItem[]> {
    return this.http.get(environment.urlService).pipe(
      map((data: any) => {
        return data.Search as CatalogItem[];
      })
    );
  }
}
