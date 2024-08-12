import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEstudiantesPageRoutingModule } from './formulario-estudiantes-routing.module';

import { FormularioEstudiantesPage } from './formulario-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEstudiantesPageRoutingModule
  ],
  declarations: [FormularioEstudiantesPage]
})
export class FormularioEstudiantesPageModule {}
