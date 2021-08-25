import { Component, OnInit } from '@angular/core';
import { RestService, Voiture } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.scss']
})
export class VoitureEditComponent implements OnInit {

  //voiture: Voiture;
  voiture= {
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

  ngOnInit(): void {
    this.rest.getVoiture(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.voiture = data;
        console.log(this.voiture);
      }
    )
  }

  updateVoiture(){
    this.rest.updateVoiture(this.voiture).subscribe(
      (result) => {this.router.navigate(['/voiture']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
