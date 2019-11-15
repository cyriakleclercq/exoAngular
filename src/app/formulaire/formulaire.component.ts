import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';
import { PersonneModel } from '../models/personneModel';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm: FormGroup;
  resultat: PersonneModel[];


  constructor(fb: FormBuilder, private personneService: PersonneService, private router: Router) {
    this.userForm = fb.group({
      sexe: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      surnom: new FormControl(''),
      dateDeNaissance: Date,
      taille: new FormControl('')

    })
  }

  ngOnInit() {
    this.getPersonnes();
  }

  getPersonnes() {
    this.resultat = this.personneService.getAllPersonnes()
  }

  register() {

    this.personneService.savePersonne(this.userForm.value);
    this.userForm.reset();

  }


}
