import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [

  {
    path: '',
    component: ProductosComponent
  },

  
  //{path: 'productos', component: ProductosComponent },
  //{ path: '', component: ProductosComponent },
  //{path: '', redirectTo: 'productos', pathMatch: 'full'},
  //Ruta de Pantalla Principal
  //{path: 'notFound', component: NotFoundPageComponent},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
