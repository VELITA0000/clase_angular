import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieItem } from './movie-item/movie-item';
import { Movie as IMovie } from '../../shared/types/movie';   // interfaz
import { Movie } from '../../shared/services/movie';          // servicio

@Component({
  selector: 'app-movies',
  imports: [CommonModule, MovieItem, FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})

export class Movies implements OnInit {
  movies: IMovie[] = [];
  
  title = ''; // propiedad asociada a un binder de propiedad en el html

  confirmed = true;
  
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
    this.movieService.setMovie(movie)
  }

  addMovie() {
    alert('Agregar: ' + this.title);
    this.title = '';
  }


}
