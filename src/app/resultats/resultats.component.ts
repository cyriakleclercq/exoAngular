import { Component, OnInit, Input } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { PersonneModel } from '../models/personneModel';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  @Input() personne: PersonneModel[];

  constructor(private personneService: PersonneService) { }


  ngOnInit() {
  }


}
