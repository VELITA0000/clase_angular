import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItem } from './movie-item/movie-item';
import { Movie } from '../../shared/services/movie';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, MovieItem],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {
  movies: string[] = [
    'Terminator',
    'Chuerco',
    'Son como ninos'
  ];
  
  constructor(private movieService: Movie) {}

  handleMovieSelected(title: string) {
    // alert(title)
    // localStorage.setItem('movie', title);
    this.movieService.setMovie(title);
  }
}
