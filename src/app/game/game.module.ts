import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './component/game/game.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'





@NgModule({
  declarations: [
    GameComponent
  
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    

    
  ]
})
export class GameModule { }
