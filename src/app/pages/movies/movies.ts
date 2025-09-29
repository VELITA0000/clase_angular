import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItem } from './movie-item/movie-item';
import { Movie as IMovie } from '../../shared/types/movie';   // interfaz
import { Movie } from '../../shared/services/movie';          // servicio

@Component({
  selector: 'app-movies',
  imports: [CommonModule, MovieItem],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})

export class Movies implements OnInit {
  movies: IMovie[] = [];
  
  constructor(private movieService: Movie) {}

  ngOnInit(): void {
    console.log('ngOnInit ejecutado'); 
    this.movieService.getAllMovies().then((movies) => {
      console.log('Promesa resuelta con movies:', movies);
      this.movies = movies;
      console.log('this.movies actualizado en el componente:', this.movies);
    }).catch();
  }
  
  handleMovieSelected(movie: IMovie) {
    this.movieService.setMovie(movie);
  }
}
