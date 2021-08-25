import { Component, OnInit } from '@angular/core';
import { RestService, Voiture } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  voitures: Voiture[] = [];

  constructor(public rest:RestService, private router: Router) { }

  ngOnInit(){
    this.getVoitures();
  }

  getVoitures(){
    this.rest.getVoitures().subscribe(
      (resp)=>{
        console.log(resp);

        this.voitures = resp;
      }
    )
  }

  add(){
    this.router.navigate(['/voiture-new']);
  }

  delete(id: number) {
    this.rest.deleteVoiture(id).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
    err => {
      console.log("Error");
    }
    )   
  }
}
