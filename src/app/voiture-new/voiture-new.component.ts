import { Component, OnInit } from '@angular/core';
import { RestService, Voiture } from '../rest.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-new',
  templateUrl: './voiture-new.component.html',
  styleUrls: ['./voiture-new.component.scss']
})
export class VoitureNewComponent implements OnInit {


voiture = {
  id: 0,
  Marque: '',
  PrixDemande: 0,
  Image: '',
  Kilometrage: 0,
  Cylindree: 0,
  Description: '',
  AnneeDeMiseEnCirculation: 0,
  Modele: '',
  Puissance: 0
}

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  newVoiture(){
    this.rest.newVoiture(this.voiture).subscribe(
      (result) => {this.router.navigate(['/voiture']);}
      )
  }

}
