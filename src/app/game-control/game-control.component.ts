import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber=0;

  constructor() { }

  ngOnInit() { 
  }

 onStartGame(){
   this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
   },1000);
     }  
  onStopGame(){
    clearInterval(this.interval);
  }

    }