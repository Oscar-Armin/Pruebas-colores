import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { GameComponent } from './component/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
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
export class GameRoutingModule {}
