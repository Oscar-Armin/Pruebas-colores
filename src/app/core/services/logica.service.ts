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
      title:"Seleccione el color",
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
      color: 'Green',
      title: 'verde'
    },
    {
      color: 'Yellow',
      title: 'amarillo'
    },
    {
      color: 'Orange',
      title: 'anaranjado'
    },
    {
      color: 'Brown',
      title: 'café'
    },
    {
      color: 'LightBlue',
      title: 'celeste'
    },
    {
      color: 'Pink',
      title: 'rosado'
    },
    {
      color: 'Purple',
      title: 'morado'
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
