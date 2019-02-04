import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIntervalFired(firedNumber:number){
    if(firedNumber%2===0){
      console.log(firedNumber);
      this.evenNumbers.push(firedNumber);
    }
    else{ 
      this.oddNumbers.push(firedNumber);
    }
  }
}
