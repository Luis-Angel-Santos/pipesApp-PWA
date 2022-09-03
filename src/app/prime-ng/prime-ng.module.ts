import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
