import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './component/game/game.component';
import { GameRoutingModule } from './game-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module'




@NgModule({
  declarations: [
    GameComponent
  
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    MaterialModule,
   

    
  ]
})
export class GameModule { }
