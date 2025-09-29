import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Movie } from '../../../shared/types/movie';

@Component({
  selector: 'app-movie-item',
  imports: [RouterModule],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.scss'
})

export class MovieItem {
  // @Input() title = ''; 
  @Input() movie: Movie = { title: ''};
  
  /* 
  @Output() onSelected: EventEmitter<string> = new EventEmitter();
  selectMovie() {
    console.log('Evento select movie ejecutado a elemento title: ', this.title);
    this.onSelected.emit(this.title);
  }
    */
  @Output() onSelected: EventEmitter<Movie> = new EventEmitter();
  selectMovie() {
    console.log('Evento select movie ejecutado a elemento title: ', this.movie);
    this.onSelected.emit(this.movie);
  }
}

