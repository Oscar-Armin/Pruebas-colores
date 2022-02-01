import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './component/result/result.component';
import { ResultRoutingModule } from './result-routing.module'



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
