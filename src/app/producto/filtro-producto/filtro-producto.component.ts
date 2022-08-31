import { query } from '@angular/animations';
import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-producto',
  templateUrl: './filtro-producto.component.html',
  styleUrls: ['./filtro-producto.component.css']
})
export class FiltroProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private location :Location,
    private  activatedRoute:ActivatedRoute
    ) {
   }
   form:FormGroup
   tipos=[{id:1,nombre:'corporativo'},
   {id:2,nombre:'consumo'},
   {id:3,nombre:'Gamer'}
  ]

  productos=[
      {titulo:'hp 245',idTipo:[1],enTransito:false,enDisponible:true,  poster:'https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg' },
      {titulo:'dell 3420',idTipo:[2],enTransito:true,enDisponible:false,  poster:'https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg' },
      {titulo:'ACER NITRO',idTipo:[2,3],enTransito:true,enDisponible:true,  poster:'https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg' },
  ]
  productosOriginal=this.productos;
  formularioOriginal={
    titulo:'',
    fechaLanzamiento: '',
    precio: 0,
    poster:'',
    tipoId:0, 
    enTransito: false,
    enDisponible: false
    

  };
  ngOnInit(): void {
    this.form =this.formBuilder.group(this.formularioOriginal)
    this.leerValoresURL();
  this.form.valueChanges
    .subscribe(valores=>{
     // console.log(valores)
     this.productos =this.productosOriginal;
     this.buscarProductos(valores)
     this.escribirParametrosBusquedaEnURL();
     
    })

  }

// funcion para leer los parametros cuando son pegados en la url
private leerValoresURL(){
this.activatedRoute.queryParams.subscribe((params)=>{
  var objeto:any={};
  if (params.titulo){ objeto.titulo=params.titulo }
  if (params.tipoId){ objeto.tipoId=params.tipoId }
  if (params.enTransito){ objeto.enTransito=params.enTransito }
  if (params.enDisponible){ objeto.enDisponible=params.enDisponible }

  this.form.patchValue(objeto);

});

}



//esta funcion es para que me coloque los datos de los filtros en la url 
private escribirParametrosBusquedaEnURL(){
  var queryStrings=[];
  var valoresFormulario=this.form.value;
    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }  
    if(valoresFormulario.tipoId){
      queryStrings.push(`tipoId=${valoresFormulario.tipoId}`)
    }  
    if(valoresFormulario.enTransito){
      queryStrings.push(`enTransito=${valoresFormulario.enTransito}`)
    }  
    if(valoresFormulario.enDisponible){
      queryStrings.push(`enDisponible=${valoresFormulario.enDisponible}`)
    }  
    this.location.replaceState('productos/buscarProductos', queryStrings.join('&'));
 }

  buscarProductos(valores:any){
    if(valores.titulo){
      this.productos =this.productosOriginal;
      this.productos =this.productos.filter(producto=>producto.titulo.indexOf(valores.titulo)!==-1)
    }
    if(valores.tipoId !==0){
    this.productos =this.productos.filter(producto=>producto.idTipo.indexOf(valores.tipoId)!==-1)
    }
    if(valores.enTransito){
      this.productos =this.productos.filter(producto=>producto.enTransito)
      }
      if(valores.enDisponible){
        this.productos =this.productos.filter(producto=>producto.enDisponible)
        }
  

  }
  limpiar(){
    this.form.patchValue(this.formularioOriginal);

  }
}
