import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  scanSubscription;

  constructor(private qrScanner: QRScanner, 
    // private toastCtrl: ToastController
    ) 
    { }

  ngOnInit() {}
   
  ionViewWillLeave() {
    this.stopScanning();
  }
  ionViewWillEnter() {
    this.scan();
  }
  scan() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scanSubscription = this.qrScanner.scan().subscribe((text:string) => {
            // let toast = this.toastCtrl.create({
            //   message: `${text}`,
            //   position: 'top',
            //   duration: 3000,
            //   closeButtonText: 'OK'
            // });
            // toast.present();
          });
        } else {
          console.error('Permission Denied', status);
        }
      })
      .catch((e: any) => {
        console.error('Error', e);
      });
  }
  stopScanning() {
    (this.scanSubscription) ? this.scanSubscription.unsubscribe() : null;
    this.scanSubscription=null;
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

}
