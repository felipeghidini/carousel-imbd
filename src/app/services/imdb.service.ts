import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbFilmModel } from './imdb-film.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apiKey: string = 'k_qgmbon31';
  baseUrl: string = 'http://localhost:3000/items';
  baseUrlPoster: string = `https://imdb-api.com/en/API/Posters/${this.apiKey}`;

  constructor(private httpClient: HttpClient) { }

  getDate(): Observable<ImdbFilmModel> {
    return this.httpClient.get<ImdbFilmModel>(this.baseUrl);
  }

  getPoster(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }
}
