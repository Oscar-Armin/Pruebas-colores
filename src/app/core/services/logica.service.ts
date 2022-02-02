import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Color } from '../models/color.model'
import { Frase } from '../models/frase.model'
@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  frases: Frase[]=[
    {
      title:"Selecciona el color",
      valor:true
    },
    {
      title:"No seleccione el color",
      valor:false
    },
  ];


  colores: Color[] =[
    {
      color: 'Black',
      title: 'negro'
    },
    {
      color: 'Red',
      title: 'rojo'
    },
    {
      color: 'YellowGreen',
      title: 'verde'
    },
    {
      color: 'Yellow',
      title: 'amarillo'
    },
    {
      color: 'DarkOrange',
      title: 'anaranjado'
    },
    {
      color: 'SaddleBrown',
      title: 'café'
    },
    {
      color: 'SkyBlue',
      title: 'celeste'
    },
    {
      color: 'Pink',
      title: 'rosado'
    },
    {
      color: 'DarkViolet',
      title: 'morado'
    },
    {
      color: 'MediumBlue',
      title: 'azul'
    },

  ];
  


  constructor() { }

  getCondicion():Frase {
    return this.frases[Math.floor(Math.random() * this.frases.length)]
  }
  
  getColors(): Color[] {
    return this.getRandom(this.colores,3)
  }

  getRandom(arr:Color[], n:number):Color[] {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    
    return result;
  }
}
