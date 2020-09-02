import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-place-list',
  templateUrl: 'place-list.html',
  styleUrls: ['./place-list.scss'],
})
export class PlaceListPage {
  places: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getPlaces().subscribe((places: any[]) => {
      this.places = places;
    });
  }
}
