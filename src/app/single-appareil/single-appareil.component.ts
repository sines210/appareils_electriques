import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name:string = 'Appareil';
  status:string = 'Statut';


  constructor(private appareilService:AppareilService, private route:ActivatedRoute) {
    
   }
   
   ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    const id = this.route.snapshot.params.id;
    this.name = this.appareilService.getAppareilById(+id)?.name as string 
    this.status = this.appareilService.getAppareilById(+id)?.status as string;
    //le plus devant id va cast le string (id params) en number (id passé en number ds l'objet ds le service), l'opttionnel ? avec as string permet d'éviter d'avoir un objet undefined on a un type optionnel sur ce qui va etre retourné et on lui assigne un type string qui est le type qu'on cherche à retourner
  }

  
}
