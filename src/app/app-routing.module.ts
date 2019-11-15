import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ResultatsComponent } from './resultats/resultats.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: MenuComponent },
  { path: 'test', component: TestComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'resultats', component: ResultatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
