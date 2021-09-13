import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonlistComponent } from './NoService/personlist/personlist.component';
import { PersonComponent } from './NoService/person/person.component';
import { PersonInpurComponent } from './NoService/person-inpur/person-inpur.component';
import { PersonlistComponent2 } from './WithService/personlist/personlist.component';
import { PersondetailComponent } from './WithService/persondetail/persondetail.component';
import { PersoninputComponent } from './WithService/personinput/personinput.component';
import { PlistComponent } from './WithSubjects/plist/plist.component';
import { PdtlComponent } from './WithSubjects/pdtl/pdtl.component';
import { PinpComponent } from './WithSubjects/pinp/pinp.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    PersonlistComponent, PersonComponent, PersonInpurComponent,
    PersonlistComponent2, PersondetailComponent, PersoninputComponent,
    PlistComponent, PdtlComponent, PinpComponent]
})
export class HomePageModule { }
