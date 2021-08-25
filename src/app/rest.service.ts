import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

const endpoint="http://localhost:3000/api/car";

export interface Voiture {
  id: number,
  Marque: string,
  PrixDemande: number,
  Image: string,
  Kilometrage: number,
  Cylindree: number,
  Description: string,
  //MiseEnVente: Date,
  AnneeDeMiseEnCirculation: number,
  Modele: string,
  Puissance: number
}

@Injectable({
  providedIn: 'root'
})


export class RestService {

  constructor(private http:HttpClient) { }

  getVoitures(): Observable<any> {
    return this.http.get<Voiture>(endpoint);
  }

  newVoiture(voiture: Voiture): Observable<any>{
    return this.http.post<Voiture>(endpoint, voiture);
  }

  updateVoiture(voiture: Voiture): Observable<any>{
    return this.http.put<Voiture>(endpoint +'/'+ voiture.id, voiture);
  }

  getVoiture(id: number): Observable<any>{
    return this.http.get<Voiture>(endpoint + '/'+ id);
  }

  deleteVoiture(id: number): Observable<any> {
    return this.http.delete<Voiture>(endpoint + '/delete/' + id);
  }
}
