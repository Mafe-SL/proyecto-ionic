import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-formulario-estudiantes',
  templateUrl: './formulario-estudiantes.page.html',
  styleUrls: ['./formulario-estudiantes.page.scss'],
})
export class FormularioEstudiantesPage implements OnInit {

  @Input() item: any;
  _id!: string;
  nombre!: string;
  apellido!: string;
  matricula!: string;
  email!: string;
  carrera!: string;
  telefono!: string;

  formGroup!: FormGroup;
  isDisabled: boolean = true;

  constructor(
    private modalCtrl: ModalController,
    private studentService: EstudiantesService,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    console.log(this.item);

    if (this.item) {
      this._id = this.item._id;
      this.nombre = this.item.code;
      this.apellido = this.item.name;
      this.matricula= this.item.category;
      this.email = this.item.description;
      this.carrera = this.item.price;
      this.telefono= this.item.amount;
    }
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [this.nombre || '', Validators.required],
      apellido: [this.apellido || '', Validators.required],
      matricula: [this.matricula || '', Validators.required],
      email: [this.email || '', Validators.required],
      carrera: [this.carrera || '', Validators.required],
      telefono: [this.telefono || '', Validators.required],
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
    });
    toast.present();
  }

  confirm() {
    let request = {
      id: this._id,
      nombre: this.nombre,
      apellido: this.apellido,
      matricula: this.matricula,
      email: this.email,
      carrera: this.carrera,
      telefono: this.telefono,
    };

    try {
      this.studentService.addStudent(request).subscribe(
        (item) => {
          console.log(item);
          this.presentToast('Estudiante añadido exitosamente', 'success');
          this.modalCtrl.dismiss('confirm');
        },
        (error) => {
          console.log(error);
          this.presentToast('Error al añadir el estudiante', 'danger');
        }
      );
    } catch (error) {
      console.log(error);
      this.presentToast('Un error ha ocurrido', 'danger');
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
