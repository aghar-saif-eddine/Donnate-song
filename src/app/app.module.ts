import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {  AngularFireDatabaseModule } from '@angular/fire/database' ;

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera} from '@ionic-native/camera/ngx';

import { Facebook} from '@ionic-native/facebook/ngx';
import { LottieAnimationViewModule } from 'ng-lottie';

const firebaseConfig = {
  apiKey: 'AIzaSyCnI7oK04rM43fZGZzEXprG4T7dKVdudMU',
    authDomain: 'dbapplication-52b0b.firebaseapp.com',
    databaseURL: 'https://dbapplication-52b0b.firebaseio.com',
    projectId: 'dbapplication-52b0b',
    storageBucket: 'dbapplication-52b0b.appspot.com',
    messagingSenderId: '288534695545'
  };
  @NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    LottieAnimationViewModule.forRoot(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule ,

             ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Geolocation,
    Camera,
    Facebook,
    CallNumber,
    SMS,
                  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,
     UserService,
    AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
