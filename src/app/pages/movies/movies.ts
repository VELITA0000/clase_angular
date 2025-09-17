import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItem } from './movie-item/movie-item';

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
  ]

}
