import { Injectable } from '@angular/core';
import { Movie as IMovie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class Movie {

  // private title: string = '';
  private movie: IMovie = { title: ''}
  private movies: IMovie[] = [
    { title: 'Chuerco'},
    { title: 'Terminator'},
    { title: 'Son como ninos'}
  ];
  
  getMovie(): IMovie {
    return this.movie.title ? this.movie: JSON.parse(localStorage.getItem('movie') || '{}');
  }

  setMovie(movie: IMovie): void {
    this.movie = movie;
    localStorage.setItem('movie', JSON.stringify(movie));
  }

  getAllMovies(): Promise<IMovie[]> {
    console.log('getAllMovies llamado'); 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Timeout terminado, resolviendo movies:', this.movies);
        resolve([...this.movies]); // (this.movies)
      }, 2000);
    });
  }

  addMovie(title: string) {
    this.movies.push({
      title
    })
  }
}
