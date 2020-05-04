import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listedonnor',
  templateUrl: './listedonnor.page.html',
  styleUrls: ['./listedonnor.page.scss'],
})
export class ListedonnorPage implements OnInit {

  items ;
  constructor( public navCtrl: NavController ,
    public  afd: AngularFireDatabase ) {
        this.getDataFromFirebase();
       }
       getDataFromFirebase() {
         this.afd.list('liste/').valueChanges().subscribe(
           data => {
               this.items = data;
           }
         );
           }
  ngOnInit() {
  }

}
