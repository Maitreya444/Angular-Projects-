import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iairplane } from './airplane';
@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService 
{
  public URL : string = "/assets/Data/airplane.json";
  constructor(public hobj : HttpClient) { }

  public Getfleet ():Observable <Iairplane[]>
  {
    return this.hobj.get<Iairplane[]>(this.URL);
  }
}
