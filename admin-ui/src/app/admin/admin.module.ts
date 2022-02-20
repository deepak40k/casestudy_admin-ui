import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
