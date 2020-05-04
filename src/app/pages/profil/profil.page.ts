import { Profile } from 'selenium-webdriver/firefox';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss']
})
export class ProfilPage implements OnInit {
  // private db: any;
  // mail: any;
  tel: any;
  username: any;
   items;
  profileData: AngularFireObject<any>;

  user = {} as User;
  profile = {} as Profile;

  constructor(
    public navCtrl: NavController,
    public  afd: AngularFireDatabase ,
    private afAuth: AngularFireAuth,
    private afData: AngularFireDatabase  ) {
    //  this.getDataFromFirebase();
      }

  getCurrentUser() {
        return new Promise(resolve => {
      this.afAuth.authState.subscribe(data => {
               console.log('data uid est ' + data.uid );
        resolve(data.uid);
      });
    });
  }
   async getUserFirstName() {
     const uid = this.getCurrentUser();
     console.log(uid);
    this.profileData = this.afData.object(
       `/liste/${uid}`);
     console.log( this.profileData);
         return this.profileData;
   }
  // getDataFromFirebase() {
  //   const User = firebase.auth().currentUser.uid;
  //   if (User != null) {
  //  this.afd.list('/liste').valueChanges().subscribe(
  //    data => {
  //        this.items = data;
  //  }
  //  );
  //    } else {
  //     console.log('ok');
  //   }
  //   }
  // affiche() {
  // show user name
  // tslint:disable-next-line: no-shadowed-variable
  // const User = firebase.auth().currentUser;
  //           // tslint:disable-next-line:no-shadowed-variable
  // tslint:disable-next-line:no-shadowed-variable
  // firebase.auth().onAuthStateChanged( User => {
  // console.log('from auth !! ' + User.email);
  // console.log('from auth !! ' + User);
  // if ( User != null) {
  //       this.afd.list('liste').valueChanges().subscribe(
  //       data => {
  //       this.items = data;
  // });
  // }})  ;
  // }

  // aff() {
  //   // show user name
  //    //  const user = this.getCurrentUser() ;
  //  const a = this.profileData();
  //      // tslint:disable-next-line:no-shadowed-variable
  //    if (user === a) {
  //           this.afd.list(`users/liste`).valueChanges().subscribe( data => {
  //             console.log(data);

  //             this.items = data;
  //   });
  //   }
  //   }

  async ngOnInit() {
     this.getUserFirstName();
    // const dataObject = await this.aff();
    // dataObject.valueChanges().subscribe(data => console.log(data));
    // console.log('The Users first name is ', await this.aff());
  }
}
