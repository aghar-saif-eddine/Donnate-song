import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-donnor',
  templateUrl: './donnor.page.html',
  styleUrls: ['./donnor.page.scss']
})
export class DonnorPage implements OnInit {
  private listDonner: AngularFireList<any>;

  username = '';
  password = '';
  uid = '';
  id = '' ;
  tel: number;

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router,
    public navCtrl: NavController,
    public db: AngularFireDatabase
  ) {
    this.listDonner = db.list('/liste'); // Add to database
  }

  ngOnInit() {}
  async register() {
    const { username, password, tel, id } = this;
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(
        username + '@gmail.com',
        password
      );
      this.afstore.doc(`users/liste${res.user.uid}`);
      // tslint:disable-next-line:no-shadowed-variable
      const id = res.user.uid;
      this.user.setUser({
        username,
        tel,
        uid: id
      });
      console.log(id);
      this.router.navigate(['/partdonnor']);
    } catch (error) {
      console.dir(error);
    }
    this.listDonner.push({
      username: username,
      password: password,
      tel: tel,
      uid: id,
    });
  }
}
