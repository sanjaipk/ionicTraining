import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDtlPageRoutingModule } from './recipe-dtl-routing.module';

import { RecipeDtlPage } from './recipe-dtl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDtlPageRoutingModule
  ],
  declarations: [RecipeDtlPage]
})
export class RecipeDtlPageModule {}
