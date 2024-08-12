import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioEstudiantesPage } from './formulario-estudiantes.page';

describe('FormularioEstudiantesPage', () => {
  let component: FormularioEstudiantesPage;
  let fixture: ComponentFixture<FormularioEstudiantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
