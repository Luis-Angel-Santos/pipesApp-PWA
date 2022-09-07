import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  declarations: [],
  imports: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
  ]
})
export class PrimeNgModule { }
