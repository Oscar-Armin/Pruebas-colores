import { Component, OnInit,ViewEncapsulation, VERSION,ViewChild,ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { LogicaService } from '../../../core/services/logica.service'
import { Color } from '../../../core/models/color.model'
import { Frase } from '../../../core/models/frase.model'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class GameComponent implements OnInit {
  name = "Angular " + VERSION.major;
  @ViewChild("contenido") contenido!: ElementRef;

  //puntuacion
  porcentaje :number= 0;
  
  //mostrar si ya fueron jugados 
  jugados = [0,0,0,0,0];
  //cuantos juegos ha realizado
  intento = 0;
  //Variable para mostrar proccess bar
  progreso: number =0;  
  //condicion para ganar el juego en curso
  texto!: Frase;
  //Color de la condicion
  color !:Color ;
  //banderas de seleccion (validacion de victoria y muestra de correcta e incorrecta)
  estado1: boolean = false;
  estado2: boolean = true;
  estado3: boolean = false;
  selecciono: boolean = false;
  selecciono1: boolean = false;
  selecciono2: boolean = false;
  selecciono3: boolean = false;
  //colores en pantalla
  colores !: Color[];
  //se estan mostrando resulotados
  mostrandoResultados :boolean = false;
  

  constructor(private logicaService: LogicaService,private modal:NgbModal) { 
    
  }

  ngOnInit(): void {
    this.colores= this.logicaService.getColors();
    this.texto = this.logicaService.getCondicion();
    this.color = this.getColorCondicion();
    

    const contador = interval(1000);
    contador.subscribe( (n) =>{
      //si no ha terminado el juego siga moviendo el tiempo
      if(!this.mostrandoResultados) {
        
        if(this.intento !== 5){
        
          if (this.selecciono){
            this.progreso -= 20;
            this.selecciono1=false;
            this.selecciono2=false;
            this.selecciono3=false;
            this.selecciono= false;
            this.progreso = 100;
  
          }
  
  
          if(this.progreso === 100){
            this.jugados[this.intento] =1;
            
            this.intento++;
            
            
            this.colores= this.logicaService.getColors();
            this.texto = this.logicaService.getCondicion();
            this.color = this.getColorCondicion();
  
            //si no selecciono paso el intento
  
            //reinicio timer
            this.progreso = 0;
            
          }else{
            this.progreso += 20;
          }
        }else{
          this.intento =0;
          this.jugados.fill(0)
          console.log("Termino el juego");
          //redirecciono a resultado (muestro modal/pop-up)
          this.mostrarResultados();
  
          
        }
      }
      

       


        
        
      }
    );
  }

  getColorCondicion(): Color{
    return this.colores[Math.floor(Math.random() * this.colores.length)];
  }
  //selecciono un color, se verificara la condicion
  buttonClicked(posicion: number){
    this.selecciono = true;

    

    if(  (this.color.title === this.colores[posicion].title ) === this.texto.valor  ){
      
      if (posicion === 0){
        this.selecciono1 = true;
        this.estado1 = true;
      }else if (posicion === 1){
        this.selecciono2 = true;
        this.estado2 = true;
      }else if (posicion === 2){
        this.selecciono3 = true;
        this.estado3 = true;
      }


      this.porcentaje += 20;

    }else{
      
      if (posicion === 0){
        this.selecciono1 = true;
        this.estado1 = false;
      }else if (posicion === 1){
        this.selecciono2 = true;
        this.estado2 = false;
      }else if (posicion === 2){
        this.selecciono3 = true;
        this.estado3 = false;
      }

    }
    console.log(this.porcentaje)
  }
  
  mostrarResultados(){
    this.mostrandoResultados = true;
    this.modal.open(this.contenido,{backdropClass:'blue',size:'xl',centered:true,animation:true,backdrop : 'static',keyboard : false })
    
  }
  reiniarJuego(){
    this.mostrandoResultados = false;
    this.porcentaje=0;
    this.colores= this.logicaService.getColors();
    this.texto = this.logicaService.getCondicion();
    this.color = this.getColorCondicion();
  }


}
