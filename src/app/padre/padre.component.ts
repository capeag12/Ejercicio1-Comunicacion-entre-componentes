import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compPadre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  pulsadoPadre!:string;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarPulsado(num:number){
    this.pulsadoPadre="Se ha pulsado el boton "+num;
  }

}
