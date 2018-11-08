import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertaimentContainerComponent } from './containers/entertaiment-container/entertaiment-container.component';
import { EntertaimentRoutingModule } from './entertaiment-routing.module';
import { CatalogTableComponent } from './components/catalog-table/catalog-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { reducers } from './reducers';
import { TableEffects } from './effects/table-effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntertainmentService } from './services/entertainment.service';
@NgModule({
  declarations: [EntertaimentContainerComponent, CatalogTableComponent],
  imports: [
    CommonModule,
    EntertaimentRoutingModule,
    NgxDatatableModule,
    StoreModule.forFeature('entertainment', reducers),
    EffectsModule.forFeature([TableEffects])
  ],
  providers: [EntertainmentService]
})
export class EntertaimentModule {}
