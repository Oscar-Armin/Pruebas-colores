import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ResultComponent } from './component/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: ResultComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ResultRoutingModule {}
