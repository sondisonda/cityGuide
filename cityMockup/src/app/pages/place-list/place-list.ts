import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { PlaceFilterPage } from '../place-filter/place-filter';

@Component({
  selector: 'page-place-list',
  templateUrl: 'place-list.html',
  styleUrls: ['./place-list.scss'],
})
export class PlaceListPage {

  @ViewChild('placeList', { static: true }) placeList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownPlaces: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  places: any[] = [];

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public config: Config
  ) { }


  ionViewDidEnter() {
    this.confData.getPlaces().subscribe((places: any[]) => {
      this.places = places;
    });
  }

  updatePlaceList() {
    // Close any open sliding items when the placevent list updates
    if (this.placeList) {
      this.placeList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownPlaces = data.shownPlaces;
      this.groups = data.groups;
    });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: PlaceFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updatePlaceList();
    }
  }
}
