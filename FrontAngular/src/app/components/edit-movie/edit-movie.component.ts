import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent {
  movie: Movie = {
    nombre: '',
    imagen: '',
    valoracion: 0,
  };

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.movieService.getMovie(params['id']).subscribe((movie: Movie[]) => {
        this.movie = movie[0];
      })
    );
  }

  onSubmit() {
    this.movieService.updateMovie(this.movie).subscribe({
      next: (x) => {
        console.log(x);
        this.router.navigate(['/']);
      },
      error: console.log,
    });
  }
}
