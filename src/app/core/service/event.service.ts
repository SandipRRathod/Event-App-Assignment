import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiKey = 'SZq0rBbOu3Pr3WmrTRQK1X6CFjUYSvrW';
  private baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';

  constructor(private http: HttpClient) {}

  getEvents(city: string = 'Sydney', countryCode: string = 'AU'): Observable<any> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&city=${city}&countryCode=${countryCode}`;
    return this.http.get(url);
  }
}
