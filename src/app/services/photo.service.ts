import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { uploadString, ref, getStorage, getDownloadURL, listAll } from 'firebase/storage';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: any[] = [];

  constructor(private storage: AngularFireStorage) {
    this.loadImagesFromStorage(); // Cargar imágenes desde Firebase Storage al iniciar el servicio
  }

  public async addPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    let imagePath = 'unit-3-photo' + Date.now();
    let imageUrl = await this.uploadImage(imagePath, photo.dataUrl);

    this.photos.push(imageUrl);
  }

  async uploadImage(path: string, data_url: any) {
    const storage = getStorage();
    const storageRef = ref(storage, path);

    return uploadString(storageRef, data_url, 'data_url').then(() => {
      return getDownloadURL(storageRef);
    });
  }

  private async loadImagesFromStorage() {
    const storage = getStorage();
    const imagesRef = ref(storage, ''); // Ref a la raíz o un directorio específico

    listAll(imagesRef).then(async (result) => {
      for (let itemRef of result.items) {
        const url = await getDownloadURL(itemRef);
        this.photos.push(url);
      }
    }).catch((error) => {
      console.log('Error loading images from Firebase Storage:', error);
    });
  }
}
