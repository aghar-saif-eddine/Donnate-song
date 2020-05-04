import { UserService } from 'src/app/user.service';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  constructor(
    public  NavCtlr: NavController ,
    private alertController: AlertController,
    private User: UserService) { }
      ngOnInit() {
        this.User.send();
   // async presentAlert() {
  //   const alert = await this.alertController.create({
  //   message: '.أرسلنا رسالة التحقق إلى عنوان البريد الإلكتروني الخاص بك',
  //   subHeader: 'تأكيد',
  //   buttons: ['ok']}).then(async alert => await alert.present());
  // }
 // fonction d verification email
//   send() {
//    this.presentAlert();

//  }
}
 async  presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });
  await alert.present();
}
 }
