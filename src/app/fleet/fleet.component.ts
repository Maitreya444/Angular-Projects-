import { Component, OnInit } from '@angular/core';
import { AirlineServiceService } from '../airline-service.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit
{
  public fleet : any = [];
  constructor(public obj: AirlineServiceService) {}
  ngOnInit()
  {
    return this.obj. Getfleet().subscribe(data =>this.fleet = data); 
  }
}
