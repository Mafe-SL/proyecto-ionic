import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {
    this.photos = this.photoService.photos; // Las imágenes se cargarán al iniciar
  }

  takePhoto() {
    this.photoService.addPhoto().then(() => {
      this.photos = this.photoService.photos;
    });
  }

  showPhoto() {
    this.photos = this.photoService.photos;
  }
}
