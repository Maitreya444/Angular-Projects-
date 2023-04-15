import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent 
{
  onClick() 
  {
    console.log('Button clicked!');
  }
  displayText: string = 'Ahhhh';

    
}
