import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatNativeDateModule, MatFormFieldModule, MatListModule,
  MatRadioModule, MatInputModule, MatDatepickerModule,
  MatSelectModule, MatToolbarModule, MatSidenavModule, MatMenuItem
} from '@angular/material';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ResultatsComponent } from './resultats/resultats.component';

import { PersonneService } from './services/personne.service';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    TestComponent,
    FormulaireComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
