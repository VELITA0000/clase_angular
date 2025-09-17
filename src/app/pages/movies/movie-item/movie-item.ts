import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.scss'
})

export class MovieItem {
  @Input() title = ''; 
}
