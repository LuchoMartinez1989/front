import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraMayus } from 'src/app/utilidades/Validadores/PrimeraMayus';
import { marcaCreacionDTO } from '../marcas';

@Component({
  selector: 'app-formulario-marca',
  templateUrl: './formulario-marca.component.html',
  styleUrls: ['./formulario-marca.component.css']
})
export class FormularioMarcaComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  form: FormGroup;
  @Input()
  modelo: marcaCreacionDTO;

  @Output()
  submit :EventEmitter<marcaCreacionDTO> = new EventEmitter<marcaCreacionDTO>();
  ngOnInit(): void {
  this.form =this.formbuilder.group(
    {
      nombre: ['',{
        validators: [Validators.required, Validators.minLength(3), primeraMayus()]
      }
    ]
    });
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }




  guardarmarca(){
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo =this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo nombre es requerido';
    }
    if (campo.hasError('minlength')){
      return 'la longitud minima es 3 caracteres';
    }
    if (campo.hasError('primeraMayus')){
        return campo.getError('primeraMayus').mensaje;
    }

    return '';
  }

}
