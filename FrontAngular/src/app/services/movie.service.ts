import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.URL);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post(this.URL, movie, {
      responseType: 'text',
    });
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.URL + movie.id_peli, movie, {
      responseType: 'text',
    });
  }

  deleteMovie(movie: Movie): Observable<any> {
    return this.http.delete(this.URL + movie.id_peli, {
      responseType: 'text',
    });
  }
}
