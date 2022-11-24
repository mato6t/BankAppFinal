import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Profil } from '../models/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private profilUrl = 'api/profils'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

  getProfils():Observable<Profil[]> {
    return this.http.get<Profil[]>(this.profilUrl);
  }

  updateProfil(profil: Profil): Observable<any> {
    return this.http.put(this.profilUrl, profil, this.httpOptions);
  }
}

