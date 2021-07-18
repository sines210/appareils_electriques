import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Appareil } from '../models/Appareil.model';




@Injectable({
  providedIn: 'any'
})



export class AppareilService {
 
 
  constructor(private http: HttpClient) { }


    private appareils: Appareil[]= [
        { 
          id : 1, 
          name : 'Machine à laver',
          status: 'éteint'
        },
        { 
          id : 2,
          name : 'Frigo',
          status: 'allumé'
        },
        { 
          id : 3,
          name : 'Ordinateur',
          status: 'allumé'
        },
        {
          id : 4,
          name : 'Télévision',
          status: 'éteint'
        }

      ]

          public appareilSubject = new Subject <Appareil[]>();  




      emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
      }

      getAppareilById(id:number) {
        const appareil = this.appareils.find((appareilObject) =>{
          return appareilObject.id === id;
        });
        return appareil;
      }

      switchOnAll() {
          for (let appareil of this.appareils){
              appareil.status = 'allumé'
          }
          this.emitAppareilSubject();
      }
      switchOffAll() {
        for (let appareil of this.appareils){
            appareil.status = 'éteint'
        }
        this.emitAppareilSubject();
    }
    switchOnOne(index:number) {
        this.appareils[index].status='allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index:number) {
        this.appareils[index].status='éteint';
        this.emitAppareilSubject();
    }

    addAppareil(name:string, status:string) {
      
      var appareilObject = {
        id : 0,
        name : '',
        status : ''
      }

      appareilObject.name = name;
      appareilObject.status = status;
      // appareilObject.id = this.appareils[this.appareils.length -1].id +1;
      appareilObject.id = this.appareils.length -1

      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }

    saveAppareilToServer(){
      this.http
      .post('http://localhost:3000/api/appareils', JSON.stringify(this.appareils))
      .subscribe(
        ()=>{console.log('enregistrement terminé')},
        (error:any)=>{console.log('erreur du post hhtpclient'+error)}
      )
      console.log(this.appareils)

    }


   
  //   saveAppareilToServer(appareil: Appareil) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post('http://localhost:3000/api/stuff', JSON.stringify(appareil)).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  // saveAppareilToServer(){
  //   return this.createAppareil();
  // }
} 