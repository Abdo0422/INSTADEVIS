import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemanderDevisComponent } from './demander-devis/demander-devis.component';
import { InscrireComponent } from './inscrire/inscrire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemanderDevisComponent,
    InscrireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
