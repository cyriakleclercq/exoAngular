import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { PersonneModel } from '../models/personneModel';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  resultat: PersonneModel[];
  constructor(private personneService: PersonneService) { }


  ngOnInit() {
    this.getPersonnes();
  }

  getPersonnes() {
    this.resultat = this.personneService.getAllPersonnes()
  }


}
