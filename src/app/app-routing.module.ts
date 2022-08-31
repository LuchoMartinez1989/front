import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearBodegaComponent } from './bodega/crear-bodega/crear-bodega.component';
import { EditarBodegaComponent } from './bodega/editar-bodega/editar-bodega.component';
import { IndiceBodegaComponent } from './bodega/indice-bodega/indice-bodega.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearLineasComponent } from './lineas/crear-lineas/crear-lineas.component';
import { EditarLineasComponent } from './lineas/editar-lineas/editar-lineas.component';
import { IndiceLineasComponent } from './lineas/indice-lineas/indice-lineas.component';
import { CrearMarcaComponent } from './marcas/crear-marca/crear-marca.component';
import { EditarMarcaComponent } from './marcas/editar-marca/editar-marca.component';
import { NuevaMarcaComponent } from './marcas/nueva-marca/nueva-marca.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { FiltroProductoComponent } from './producto/filtro-producto/filtro-producto.component';





const routes: Routes = [
{path:'',component:LandingPageComponent},
{path:'marcas',component:CrearMarcaComponent},
{path:'marcas/nuevo',component:NuevaMarcaComponent},
{path:'marcas/editar/:id',component:EditarMarcaComponent},

{path:'lineas',component:IndiceLineasComponent},
{path:'lineas/nuevo',component:CrearLineasComponent},
{path:'lineas/editar/:id',component:EditarLineasComponent},

{path:'bodegas',component:IndiceBodegaComponent},
{path:'bodegas/nuevo',component:CrearBodegaComponent},
{path:'bodegas/editar/:id',component:EditarBodegaComponent},

{path:'producto/crear',component:CrearProductoComponent},
{path:'producto/editar/:id',component:EditarProductoComponent},
{path:'producto/buscar',component:FiltroProductoComponent},
//wildcard
{path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
