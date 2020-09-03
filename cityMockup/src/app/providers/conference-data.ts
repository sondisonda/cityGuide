import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking places to events
    this.data = data;

    // loop through each day in the events
    this.data.events.forEach((day: any) => {
      // loop through each timeline group in the day
      day.groups.forEach((group: any) => {
        // loop through each event in the timeline group
        group.events.forEach((event: any) => {
          event.places = [];
          if (event.placeNames) {
            event.placeNames.forEach((placeName: any) => {
              const place = this.data.places.find(
                (s: any) => s.name === placeName
              );
              if (place) {
                event.places.push(place);
                place.events = place.events || [];
                place.events.push(event);
              }
            });
          }
        });
      });
    });
    console.log(this.data);
    return this.data;
  }

  getTimeline(
    dayIndex: number,
    queryText = '',
    excludeTracks: any[] = [],
    segment = 'all'
  ) {
    return this.load().pipe(
      map((data: any) => {
        const day = data.events[dayIndex];
        day.shownEvents = 0;

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        const queryWords = queryText.split(' ').filter(w => !!w.trim().length);

        day.groups.forEach((group: any) => {
          group.hide = true;

          group.events.forEach((event: any) => {
            // check if this event should show or not
            this.filterEvent(event, queryWords, excludeTracks, segment);

            if (!event.hide) {
              // if this event is not hidden then this group should show
              group.hide = false;
              day.shownEvents++;
            }
          });
        });

        return day;
      })
    );
  }

  filterEvent(
    event: any,
    queryWords: string[],
    excludeTracks: any[],
    segment: string
  ) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the event name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (event.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this event passes the query test
      matchesQueryText = true;
    }

    // if any of the events tracks are not in the
    // exclude tracks then this event passes the track test
    let matchesTracks = false;
    event.tracks.forEach((trackName: string) => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });

    // if the segment is 'favorites', but event is not a user favorite
    // then this event does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(event.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    event.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getPlaces() {
    return this.load().pipe(
      map((data: any) => {
        return data.places.sort((a: any, b: any) => {
          const aName = a.name.split(' ').pop();
          const bName = b.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  getTracks() {
    return this.load().pipe(
      map((data: any) => {
        return data.tracks.sort();
      })
    );
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data.map;
      })
    );
  }
}
