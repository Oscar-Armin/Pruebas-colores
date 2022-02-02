import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from 'ngx-progressbar'
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [],
  exports:[
    
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    NgProgressModule,
    MaterialModule
    
  ]
})
export class SharedModule { }
