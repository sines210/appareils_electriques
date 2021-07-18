import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  @Input() users!: User[];
  @Input() userSubscription !: Subscription;


  constructor(private userServie:UserService) { }

  ngOnInit(){
    this.userSubscription = this.userServie.userSubject.subscribe(
      (users:User[])=>{
        this.users = users;
      }
    )
    this.userServie.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
