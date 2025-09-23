import { Component } from '@angular/core';
import { Movie } from '../../../shared/services/movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails {
  title: string = '';

  constructor(private movieService: Movie) {
    this.title = this.movieService.getMovie();
  }
}
