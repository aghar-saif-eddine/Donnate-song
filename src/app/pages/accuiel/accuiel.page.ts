import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-accuiel',
  templateUrl: './accuiel.page.html',
  styleUrls: ['./accuiel.page.scss'],
})
export class AccuielPage implements OnInit {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: 0,
  };
  clickedImagePath: any;
  base64Image: string;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    ) {
       }

  clickImage() {
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  ngOnInit() {
  }
}

