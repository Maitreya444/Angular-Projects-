import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent 
{
  Puneclass = "Marvellous";
  fun()
  {
    return "This is Marvellous Infosystems All India Limited";
  }
}
