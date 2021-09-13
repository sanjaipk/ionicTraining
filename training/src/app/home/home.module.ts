import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersonComponent } from './person/person.component';
import { PersonInpurComponent } from './person-inpur/person-inpur.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PersonlistComponent,PersonComponent,PersonInpurComponent]
})
export class HomePageModule {}
