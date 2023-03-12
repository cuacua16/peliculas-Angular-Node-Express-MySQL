import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {
  movie: Movie = {
    nombre: '',
    imagen: '',
    valoracion: 0,
  };

  constructor(private movieService: MovieService, private router: Router) {}

  onSubmit(form: HTMLFormElement) {
    this.movie = {
      nombre: form['nombre'].trim(),
      imagen: form['imagen'].trim(),
      valoracion: 0,
    };
    this.movieService.addMovie(this.movie).subscribe({
      next: (x) => {
        console.log(x);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
