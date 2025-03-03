import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import  { TramDeparture } from '../model/trams'


@Injectable({
  providedIn: 'root'
})
export class TramService {
  private dataUrl = 'assets/server.json';

  constructor(private http: HttpClient) {}

  getTramDepartures(): Observable<TramDeparture[]> {
    return this.http.get<{ departures: TramDeparture[] }>(this.dataUrl).pipe(
      map(response => response.departures)
    );
  }

  getStopDestination(): Observable<any[]> {
    return this.http.get<{ stop_deviations:any}>(this.dataUrl).pipe(
      map(response => 
        response.stop_deviations[0].scope.stop_areas
      )
    );
  }
}
