import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('movie') movie: Movie = {
    nombre: '',
    imagen: '',
    valoracion: 0,
  };

  constructor(private movieService: MovieService) {}

  updateValoration(movie: Movie, i: number) {
    console.log(i);
    let updatedMovie = {
      ...movie,
      valoracion: i,
    };
    this.movieService.updateMovie(updatedMovie).subscribe({
      next: (x) => {
        console.log(x);
        this.movie = updatedMovie;
      },
      error: console.log,
    });
  }

  delete() {
    this.movieService.deleteMovie(this.movie).subscribe({
      next: (x) => {
        console.log(x), location.reload();
      },
      error: console.log,
    });
  }
}
