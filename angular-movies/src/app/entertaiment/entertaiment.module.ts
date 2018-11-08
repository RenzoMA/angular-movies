import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertaimentContainerComponent } from './containers/entertaiment-container/entertaiment-container.component';
import { EntertaimentRoutingModule } from './entertaiment-routing.module';

@NgModule({
  declarations: [EntertaimentContainerComponent],
  imports: [
    CommonModule,
    EntertaimentRoutingModule
  ]
})
export class EntertaimentModule { }
