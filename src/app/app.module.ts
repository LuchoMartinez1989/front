import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoproductosComponent } from './productos/listadoproductos/listadoproductos.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from  './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearMarcaComponent } from './marcas/crear-marca/crear-marca.component';
import { NuevaMarcaComponent } from './marcas/nueva-marca/nueva-marca.component';
import { IndiceLineasComponent } from './lineas/indice-lineas/indice-lineas.component';
import { CrearLineasComponent } from './lineas/crear-lineas/crear-lineas.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { CrearBodegaComponent } from './bodega/crear-bodega/crear-bodega.component';
import { IndiceBodegaComponent } from './bodega/indice-bodega/indice-bodega.component';
import { EditarLineasComponent } from './lineas/editar-lineas/editar-lineas.component';
import { EditarMarcaComponent } from './marcas/editar-marca/editar-marca.component';
import { EditarBodegaComponent } from './bodega/editar-bodega/editar-bodega.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { FormularioMarcaComponent } from './marcas/formulario-marca/formulario-marca.component';
import { FiltroProductoComponent } from './producto/filtro-producto/filtro-producto.component';




@NgModule({
  declarations: [
    AppComponent,
    ListadoproductosComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    CrearMarcaComponent,
    NuevaMarcaComponent,
    IndiceLineasComponent,
    CrearLineasComponent,
    CrearProductoComponent,
    CrearBodegaComponent,
    IndiceBodegaComponent,
    EditarLineasComponent,
    EditarMarcaComponent,
    EditarBodegaComponent,
    EditarProductoComponent,
    FormularioMarcaComponent,
    FiltroProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
