import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Router, Routes, NavigationExtras } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes:Routes = [
  {path :  'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path :  'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path :  'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path : 'auth', component: AuthComponent},
  {path : 'users', component: UserListComponent},
  {path : 'new-user', component: NewUserComponent},
  {path : '' , component: AuthComponent},
  {path : 'not-found' , component: FourOhFourComponent},
  {path : '**' , redirectTo:'/not-found'} //la wild card ** doit toujours se placer à la fin comme dernière route car sinon elle peut fonctionner pour toutes les routes qu'elle va précéder
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  exports: [RouterModule],
  providers: [AppareilService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
