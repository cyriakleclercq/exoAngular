import { Injectable } from '@angular/core';
import { PersonneModel } from '../models/personneModel';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  resultat: PersonneModel[] = [];

  constructor() { }

  savePersonne(f) {
    let personne: PersonneModel = new PersonneModel(f.sexe, f.nom, f.prenom, f.surnom, f.dateDeNaissance, f.taille);

    if (personne.sexe && personne.nom && personne.prenom && personne.surnom && personne.dateDeNaissance && personne.taille) {

      this.resultat.push(personne);

    }


  }

  getAllPersonnes() {
    return this.resultat;
  }

}
