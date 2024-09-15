import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemanderDevisComponent } from './demander-devis/demander-devis.component';
import { HomeComponent } from './home/home.component';
import { InscrireComponent } from './inscrire/inscrire.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demander-devis', component: DemanderDevisComponent },
  { path: 'inscrire', component: InscrireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
