// tram-list.component.ts - Displays tram departures
import { Component, OnInit } from '@angular/core';
import { TramService,  } from '../service/tram.service';
import { faTrainTram, faClock } from '@fortawesome/free-solid-svg-icons';
import {TramDeparture} from '../model/trams'
@Component({
  selector: 'app-tram-list',
  templateUrl: './tram-list.component.html',
  styleUrls: ['./tram-list.component.scss']
})


export class TramListComponent implements OnInit {
  trams: TramDeparture[] = []; 
  filteredTrams: TramDeparture[] = [];
  stopAreas:any = []; 
  selectedDestination = '';
  faTrainTram = faTrainTram;
  faClock = faClock;

  constructor(private tramService: TramService) {}

  ngOnInit() {

    this.tramService.getTramDepartures().subscribe(data => {
      this.trams = data;
      this.filteredTrams = data;
    });

    this.tramService.getStopDestination().subscribe(data => {
      if (data && data.length > 0) {
        this.stopAreas = data;
        console.log("Fetched Stop Areas:", this.stopAreas);
      }
    });
  }    

  filterTrams() {
    if (this.selectedDestination) {
      this.filteredTrams = this.trams.filter(
        tram => tram.destination === this.selectedDestination
      );
    } else {
      this.filteredTrams = this.trams;
    }
  }
  
}
