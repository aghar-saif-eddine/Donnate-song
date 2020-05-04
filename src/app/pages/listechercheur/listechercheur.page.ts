import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-listechercheur',
  templateUrl: './listechercheur.page.html',
  styleUrls: ['./listechercheur.page.scss'],
})
export class ListechercheurPage implements OnInit {
  items ;
  constructor( public navCtrl: NavController ,
    public  afd: AngularFireDatabase ,
    private alertCtrl: AlertController,
    private zone: NgZone ,
    private callsvs: CallNumber,
    private sms: SMS) {
        this.getDataFromFirebase();
       }

       call() {
        this.callsvs.callNumber('95855428', true ).then(() => {
          console.log(' call worked') ;
        }).catch((err) => {
          alert(JSON.stringify(err));
        });
     }
     sendsms() {

       // tslint:disable-next-line:prefer-const
       let options: {
         replaceLineBreaks: true,
         android: {
           intent: 'INTENT'
         }
       };
      this.sms.send('95855428', 'heloo', options ).then(() => {
        console.log(' sms worked') ;
      }).catch((err) => {
        alert(JSON.stringify(err));
      });
   }

       getDataFromFirebase() {
         this.afd.list('/post/').valueChanges().subscribe(
           data => {
               this.items = data;
           }
         );
           }
           ngOnInit() {
          }

}
