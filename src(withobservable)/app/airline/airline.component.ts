import { Component } from '@angular/core';
import { FleetComponent } from '../fleet/fleet.component';
import { AirlineServiceService } from '../airline-service.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent 
{
  public fleet : any = [];
  constructor(public obj: AirlineServiceService) {}
  ngOnInit()
  {
    return this.obj. Getfleet().subscribe(data =>this.fleet = data); 
  }
  
}
