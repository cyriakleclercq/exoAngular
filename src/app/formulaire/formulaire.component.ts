import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm: FormGroup;

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
  }

  register() {

    this.personneService.savePersonne(this.userForm.value);
    this.userForm.reset();
    this.router.navigate(['/resultats']);

  }


}
