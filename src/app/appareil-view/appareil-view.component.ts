import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(() => {
        resolve(date);
        }, 2000);
      }
    )

    appareils!:any[];
    appareilSubscription!: Subscription;
  
  
    constructor (private appareilService : AppareilService ) {
      setTimeout(() => {
        this.isAuth = true
      }, 4000);
    }
  
    onAllumer() {
      this.appareilService.switchOnAll()
    }
  
    onEteindre() {
      this.appareilService.switchOffAll()
    }

    onSave() {
      this.appareilService.saveAppareilToServer()
    }
  
    ngOnInit() {
      this.appareilSubscription = this.appareilService.appareilSubject.subscribe((appareils:any[])=>{
        this.appareils = appareils
      })
      this.appareilService.emitAppareilSubject();
    }
}
