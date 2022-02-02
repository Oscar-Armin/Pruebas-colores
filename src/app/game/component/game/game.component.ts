import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  progreso: number =20;  
  seleccion: string = "Seleeciona el color" ; 
  noSeleccion: string = "No selecciones el color";  
  texto: string = "Selecciona el color";
  color :string= "red";
  estado1: boolean = true;
  estado2: boolean = true;
  estado3: boolean = true;
  selecciono: boolean = true;
  selecciono1: boolean = false;
  selecciono2: boolean = false;
  selecciono3: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
