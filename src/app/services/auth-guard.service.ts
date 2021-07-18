import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs/Observable";
import { Observable } from 'rxjs';
import { Injectable , Input} from "@angular/core";
import { AuthService} from "./auth.service";
import { Router } from '@angular/router';


@Injectable()//permet d'importer un service dans un autre service

export class AuthGuard implements CanActivate {

    // @Input() isAuth!: boolean;


    constructor(private authService:AuthService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean> | UrlTree | boolean {
        if (this.authService.isAuth){
          return  true;
        }
        else{
           return this.router.navigate(['/auth'])
        }
    }
}