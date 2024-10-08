import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEstudiantesPage } from './formulario-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEstudiantesPageRoutingModule {}
