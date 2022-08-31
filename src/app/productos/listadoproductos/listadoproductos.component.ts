import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoproductos',
  templateUrl: './listadoproductos.component.html',
  styleUrls: ['./listadoproductos.component.css']
})
export class ListadoproductosComponent implements OnInit {

  constructor() { }
  @Input()
  portatiles;
  ngOnInit(): void {
  }
remover(indiceportatil:number): void{
  this.portatiles.splice(indiceportatil,1);

}
}
