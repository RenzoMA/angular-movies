import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertaimentContainerComponent } from './containers/entertaiment-container/entertaiment-container.component';
import { Routes, RouterModule } from '@angular/router';

const entertaimentRoutes: Routes = [
  {
    path: '',
    component: EntertaimentContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(entertaimentRoutes)],
  exports: [RouterModule]
})
export class EntertaimentRoutingModule {}
