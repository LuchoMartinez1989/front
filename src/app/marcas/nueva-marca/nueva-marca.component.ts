import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraMayus } from 'src/app/utilidades/Validadores/PrimeraMayus';
import { marcaCreacionDTO } from '../marcas';

@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: ['./nueva-marca.component.css']
})
export class NuevaMarcaComponent {

  constructor(private router:Router) { }

  guardarmarca(marca:marcaCreacionDTO){
    //.. guardar marca nueva
    console.log(marca);
    this.router.navigate(['/marcas'])
  }
}
