import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() authStatus!: boolean;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(() =>{
      console.log('connexion réussie!');
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['appareils'])
      //S'il y a un pb futur avec la navigation, il viendra de navigate car avec cette méthode j'utilise router en import pour le router alors que le router est configuré avec routermodule dans app.module
    })
  }
  
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
