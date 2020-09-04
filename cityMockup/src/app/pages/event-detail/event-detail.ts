import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-event-detail',
  styleUrls: ['./event-detail.scss'],
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  event: any;
  isFavorite = false;
  defaultHref = '';

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.events && data.events[0] && data.events[0].groups) {
        const eventId = this.route.snapshot.paramMap.get('eventId');
        for (const group of data.events[0].groups) {
          if (group && group.events) {
            for (const event of group.events) {
              if (event && event.id === eventId) {
                this.event = event;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.event.name
                );

                break;
              }
            }
          }
        }
      }
    });
  }

  ionViewDidEnter() {
    this.defaultHref = '/event-list';
  }

  eventClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.event.name)) {
      this.userProvider.removeFavorite(this.event.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.event.name);
      this.isFavorite = true;
    }
  }

  shareevent() {
    console.log('Clicked share event');
  }
}
