export class User {

    constructor(public firstName:string, public lastName:string, public email:string, public drinkPreference:string, public hobbies?:string[]) {
        // ceci est un raccourci typescript qui permet de déclarer des propriétés du model user, une fois ce modèle créé on peut l'utiliser dans le reste de l'application
    }
}