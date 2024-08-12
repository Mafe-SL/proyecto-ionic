import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  studentList:any[]=[]
  loader!:HTMLIonLoadingElement;
  open=true;
  constructor(private studentService:EstudiantesService,
    private modalCtrl:ModalController
  ) {}

  ngOnInit(): void {
    console.log('entraste a la vista 2');
  }

  ionViewDidEnter(){
    console.log('entraste a la vista 2');

  }

  ionViewWillEnter(){
    this.getStudents()
  }

  async getStudents(){
    try{
      await this.studentService.getStudent().subscribe(item=>this.studentList=item)
      console.log(this.studentList)
    }catch(error){
      console.log(error);
    }
  }

  

}
