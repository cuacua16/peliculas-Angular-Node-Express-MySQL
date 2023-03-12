import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input('movies') movies: Movie[] = [];
  search: string = '';
  order: string = 'nombre';
  rest: number = 10;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies.filter((m) => m.id_peli);
      if (this.search)
        this.movies = this.movies.filter((x) =>
          x.nombre.toLowerCase().includes(this.search.toLowerCase())
        );
      this.orderBy(this.order);
      console.log(this.movies);
    });
  }

  onSearch() {
    this.getMovies();
  }

  orderBy(x: string = 'nombre') {
    switch (x) {
      case 'nombre':
        return (this.movies = this.movies.sort((a: any, b: any) =>
          a.nombre.localeCompare(b.nombre)
        ));
      case 'valoracion':
        return (this.movies = this.movies.sort(
          (a: any, b: any) => b.valoracion - a.valoracion
        ));
      default:
        return this.movies;
    }
  }
}
