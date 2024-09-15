import { Component} from '@angular/core';

@Component({
  selector: 'app-demander-devis',
  templateUrl: './demander-devis.component.html',
  styleUrl: './demander-devis.component.css'
})
export class DemanderDevisComponent {

  selectDevis(type: string) {
    console.log('Selected Devis Type:', type);
  }
}
