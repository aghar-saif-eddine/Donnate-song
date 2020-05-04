import {NavController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-centresong',
  templateUrl: './centresong.page.html',
  styleUrls: ['./centresong.page.scss'],
})
export class CentresongPage implements OnInit {
  options: BarcodeScannerOptions;
   encodedText: any = '';
   encodedData: any = {};
   enscannedData: any = {};
     constructor( public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner ) { }

  ngOnInit() {
  }
 scan() {
   this.options = {
     prompt: ' scan your code'
   };
   this.barcodeScanner.scan(this.options).then((data) => {
     this.enscannedData = data ;
   }, (err) => {
     console.log('error' , err);
   });
 }
 encode() {
   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedText).then((data) => {
     this.encodedData = data;
        }, (err) => {
          console.log('error' , err);
        });
 }

}
