import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router }  from '@angular/router';
import { Appareil } from '../models/Appareil.model';


@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {


  @Input() default : string  = "éteint";



  constructor(private appareilService:AppareilService, private router:Router) { }

  ngOnInit(): void {
  }


  
  onSubmit(form:NgForm) {
  
  var name = form.value['name'];
  var status = form.value['status']; 
  this.appareilService.addAppareil(name, status);
  this.router.navigate(['appareils'])
}


}
