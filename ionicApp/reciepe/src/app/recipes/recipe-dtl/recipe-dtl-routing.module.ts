import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDtlPage } from './recipe-dtl.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDtlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDtlPageRoutingModule {}
