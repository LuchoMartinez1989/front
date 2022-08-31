import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marcaCreacionDTO } from '../marcas';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.css']
})
export class EditarMarcaComponent implements OnInit {

  constructor(private router : Router) { }
  modelo :marcaCreacionDTO={nombre:'Dell'}
  ngOnInit(): void {
  }
  guardarmarca(marca:marcaCreacionDTO){
    //.. guardar marca nueva
    console.log(marca);
    this.router.navigate(['/marcas'])
  }


  
}
